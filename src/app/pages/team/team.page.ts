import { Component, Input, OnInit } from "@angular/core";
import { ModalController, NavParams, ToastController } from "@ionic/angular";
import { Observable, Subscription, catchError, combineLatest, concat, concatAll, concatMap, defaultIfEmpty, finalize, forkJoin, from, map, merge, mergeMap, of, shareReplay, startWith, switchMap, take, tap, timeout, toArray } from "rxjs";
import { Team } from "src/app/models/team";
import { Profile } from "src/app/models/user";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";

@Component({
  selector: "app-team",
  templateUrl: "./team.page.html",
  styleUrls: ["./team.page.scss"],
})
export class TeamPage implements OnInit {
  @Input("data") team: Team;

  allowEdit: boolean = false;

  memberList$: Observable<Profile[]>;
  adminList$: Observable<Profile[]>;
  requestList$: Observable<Profile[]>;

  private subscription: Subscription;

  private subscriptionRequest: Subscription;
  private subscriptionAdmin: Subscription;
  private subscriptionMember: Subscription;

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly toastController: ToastController,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService
  ) {}

  ngOnInit() {
    this.team = this.navParams.get("data");

    const memberList: Profile[] = [];
    const adminList: Profile[] = [];
    const requestList: any[] = [];


    const member$ = this.fbService.getTeamRef(this.team.id).pipe( 
      take(1), 
      switchMap(club => this.fbService.getTeamMemberRefs(club.id).pipe(
        defaultIfEmpty([{}]),
        startWith([{}])
      )),
      switchMap((clubMemberArray:any) => {
        // Clear out the requestList when new data comes in
        memberList.length = 0;
        return from(clubMemberArray);
      }),
      tap((member:any) => console.log(member.id)),
      concatMap(user => 
          this.userProfileService.getUserProfileById(user.id).pipe(
            take(1), 
            map(user => {
              return [{...user, teamId: this.team.id}]
            }),
            catchError(error => {
              console.error('Error fetching member:', error);
              return of([]);
            })
          )
      ),
      tap(users => users.forEach(n => memberList.push(n))),
      finalize(() => console.log("Team Member"))
    )

    this.subscriptionMember = member$.subscribe({
      next: () => {
        this.memberList$ = of(memberList.filter(obj => Object.keys(obj).length > 1));
      },
      error: err => console.error('Member: Error in the observable chain:', err)
    });

    const admin$ = this.fbService.getTeamRef(this.team.id).pipe( 
      take(1), 
      switchMap(club => this.fbService.getTeamAdminRefs(club.id).pipe(
        defaultIfEmpty([{}]),
        startWith([{}])
      )),
      switchMap((clubAdminArray:any) => {
        // Clear out the requestList when new data comes in
        adminList.length = 0;
        return from(clubAdminArray);
      }),
      tap((admin:any) => console.log(admin.id)),
      concatMap(user => 
          this.userProfileService.getUserProfileById(user.id).pipe(
            take(1), 
            map(user => {
              return [{...user, teamId: this.team.id}]
            }),
            catchError(error => {
              console.error('Error fetching teamadmin:', error);
              return of([]);
            })
          )
      ),
      tap(users => users.forEach(n => adminList.push(n))),
      finalize(() => console.log("Team Admin"))
    )

    this.subscriptionAdmin = admin$.subscribe({
      next: () => {
        this.adminList$ = of(adminList.filter(obj => Object.keys(obj).length > 1));
      },
      error: err => console.error('Admin: Error in the observable chain:', err)
    });


    const requests$ = this.fbService.getTeamRef(this.team.id).pipe( 
      take(1), 
      switchMap(club => this.fbService.getTeamRequestRefs(club.id).pipe(
        defaultIfEmpty([{}]),
        startWith([{}])
      )),
      switchMap((clubRequestArray:any) => {
        // Clear out the requestList when new data comes in
        requestList.length = 0;
        return from(clubRequestArray);
      }),
      tap((request:any) => console.log(request.id)),
      concatMap(user => 
          this.userProfileService.getUserProfileById(user.id).pipe(
            take(1), 
            map(user => {
              return [{...user, teamId: this.team.id}]
            }),
            catchError(error => {
              console.error('Error fetching teamadmin:', error);
              return of([]);
            })
          )
      ),
      tap(users => users.forEach(n => requestList.push(n))),
      finalize(() => console.log("Team Requests"))
    )

    this.subscriptionRequest = requests$.subscribe({
      next: () => {
        this.requestList$ = of(requestList.filter(obj => Object.keys(obj).length > 1));
      },
      error: err => console.error('Request: Error in the observable chain:', err)
    });

  }


  ngOnDestroy() {

    if (this.subscriptionAdmin) {
      this.subscriptionAdmin.unsubscribe();
    }
    if (this.subscriptionMember) {
      this.subscriptionMember.unsubscribe();
    }
    if (this.subscriptionRequest) {
      this.subscriptionRequest.unsubscribe();
    }

  }

  async removeAdmin(admin) {
    await this.fbService.deleteTeamAdmin(this.team.id, admin.id);
    await this.toastActionSaved();
  }

  async removeMember(member) {
    await this.fbService.deleteTeamMember(this.team.id, member.id).then(()=>{
      this.toastActionSaved();
    }).catch(err=>{
      this.toastActionError(err);
    });
  }

  async deleteTeamRequest(request) {
    await this.fbService.deleteUserTeamRequest(request.teamId, request.id);
    await this.toastActionSaved();
  }

  async approveTeamRequest(request) {
    console.log(request);
    await this.fbService.approveUserTeamRequest(request.teamId, request.id);
    await this.toastActionSaved();
  }

  addTeamMember() {

    // this.fbService.getClubMemberRefs(this.team.)

  }

  addTeamAdmin() {


  }
  

  async toastActionSaved() {
    const toast = await this.toastController.create({
      message: "Änderungen erfolgreich gespeichert",
      duration: 1500,
      position: "bottom",
      color: "success",
    });

    await toast.present();
  }

  async toastActionError(error) {
    const toast = await this.toastController.create({
      message: error.message,
      duration: 2000,
      position: "bottom",
      color: "danger",
    });

    await toast.present();
  }

  edit() {
    if (this.allowEdit){
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }


  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.team, "confirm");
  }
}
