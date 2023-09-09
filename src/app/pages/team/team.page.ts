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

  memberList$: Observable<Profile[]>;
  adminList$: Observable<Profile[]>;
  requestList$: Observable<Profile[]>;

  private subscription: Subscription;


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
      switchMap(team => this.fbService.getTeamMemberRefs(team.id).pipe(
        take(1),
        defaultIfEmpty([{}]),
        startWith([{}]),
      )),
      concatMap((teamMemberArray:any) => from(teamMemberArray)),
      tap((member:any)=>console.log(member.id)),
      concatMap(user => 
          this.userProfileService.getUserProfileById(user.id).pipe(
            take(1), 
            map(user=>{
              return [{...user, teamId: this.team.id}]
            }),
            catchError(error => {
              console.error('Error fetching team member:', error);
              return of([]);
            })
          )
      ),
      tap(user => user.forEach(n => memberList.push(n))),
      finalize(() => console.log("Team Member"))
    )

    const admin$ = this.fbService.getTeamRef(this.team.id).pipe( 
      take(1), 
      switchMap(team => this.fbService.getTeamAdminRefs(team.id).pipe(
        take(1),
        defaultIfEmpty([{}]),
        startWith([{}]),
      )),
      concatMap((teamAdminArray:any) => from(teamAdminArray)),
      tap((admin:any)=>console.log(admin.id)),
      concatMap(user => 
          this.userProfileService.getUserProfileById(user.id).pipe(
            take(1), 
            map(user=>{
              return [{...user, teamId: this.team.id}]
            }),
            catchError(error => {
              console.error('Error fetching teamadmin:', error);
              return of([]);
            })
          )
      ),
      tap(user => user.forEach(n => adminList.push(n))),
      finalize(() => console.log("Team Admin"))
    )

    const requests$ = this.fbService.getTeamRef(this.team.id).pipe( 
      take(1), 
      switchMap(team => this.fbService.getTeamRequestRefs(team.id).pipe(
        take(1),
        defaultIfEmpty([{}]),
        startWith([{}]),
      )),
      concatMap((teamRequestsArray:any) => from(teamRequestsArray)),
      tap((request:any)=>console.log(request.id)),
      concatMap(user => 
          this.userProfileService.getUserProfileById(user.id).pipe(
            take(1), 
            map(user=>{
              return [{...user, teamId: this.team.id}]
            }),
            catchError(error => {
              console.error('Error fetching teamadmin:', error);
              return of([]);
            })
          )
      ),
      tap(user => user.forEach(n => requestList.push(n))),
      finalize(() => console.log("Team Admin"))
    )

    // Use combineLatest to get results when both observables have emitted
    this.subscription = combineLatest([member$, admin$, requests$]).subscribe({
      next: () => {
        this.adminList$ = of(adminList.filter(obj => Object.keys(obj).length > 1))
        this.memberList$ = of(memberList.filter(obj => Object.keys(obj).length > 1))
        this.requestList$ = of(requestList.filter(obj => Object.keys(obj).length > 1));
      },
      error: err => console.error('Error in the observable chain:', err)
  });

  }

  ngOnDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe();
  }
  
  }

  async deleteTeamRequest(request) {
    await this.fbService.deleteUserTeamRequest(request.teamId, request.id);
    await this.toastActionSaved();

  }
  async approveTeamRequest(request) {
    await this.fbService.approveUserTeamRequest(request.teamId, request.id);
    await this.toastActionSaved();
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


  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.team, "confirm");
  }
}
