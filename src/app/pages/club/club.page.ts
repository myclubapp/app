import { Component, Input, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  NavParams,
  ToastController,
} from "@ionic/angular";
import { User } from "firebase/auth";
import { Observable, Subscription, catchError, combineLatest, concat, concatAll, concatMap, defaultIfEmpty, filter, finalize, forkJoin, from, map, merge, mergeMap, of, pipe, shareReplay, startWith, switchMap, take, tap, timeout, toArray } from "rxjs";
import { Club } from "src/app/models/club";
import { Team } from "src/app/models/team";
import { Profile } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";

@Component({
  selector: "app-club",
  templateUrl: "./club.page.html",
  styleUrls: ["./club.page.scss"],
})
export class ClubPage implements OnInit {
  @Input("data") club: Club;

  memberList$: Observable<Profile[]>;
  adminList$: Observable<Profile[]>;
  requestList$: Observable<Profile[]>;

  user: User;

  private subscription: Subscription;

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly authService: AuthService,
    private readonly alertCtrl: AlertController,
    private readonly toastCtrl: ToastController,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService
  ) {}

  ngOnInit() {
    this.club = this.navParams.get("data");

    const TIMEOUT_DURATION = 1000; // 5 seconds, adjust as needed

    const memberList: Profile[] = [];
    const adminList: Profile[] = [];
    const requestList: any[] = [];

    const member$ = this.fbService.getClubRef(this.club.id).pipe( 
      take(1), 
      switchMap(club => this.fbService.getClubMemberRefs(club.id).pipe(
        take(1),
        defaultIfEmpty([{}]),
        startWith([{}]),
      )),
      concatMap((clubMemberArray:any) => from(clubMemberArray)),
      tap((member:any)=>console.log(member.id)),
      concatMap(user => 
          this.userProfileService.getUserProfileById(user.id).pipe(
            take(1), 
            map(user=>{
              return [{...user, clubId: this.club.id}]
            }),
            catchError(error => {
              console.error('Error fetching team member:', error);
              return of([]);
            })
          )
      ),
      tap(users => users.forEach(n => memberList.push(n))),
      finalize(() => console.log("Club Member"))
    )

    const admin$ = this.fbService.getClubRef(this.club.id).pipe( 
      take(1), 
      switchMap(club => this.fbService.getClubAdminRefs(club.id).pipe(
        take(1),
        defaultIfEmpty([{}]),
        startWith([{}]),
      )),
      concatMap((clubAdminArray:any) => from(clubAdminArray)),
      tap((admin:any)=>console.log(admin.id)),
      concatMap(user => 
          this.userProfileService.getUserProfileById(user.id).pipe(
            take(1), 
            map(user=>{
              return [{...user, clubId: this.club.id}]
            }),
            catchError(error => {
              console.error('Error fetching teamadmin:', error);
              return of([]);
            })
          )
      ),
      tap(users => users.forEach(n => adminList.push(n))),
      finalize(() => console.log("Club Admin"))
    )

    const requests$ = this.fbService.getClubRef(this.club.id).pipe( 
      take(1), 
      switchMap(club => this.fbService.getClubRequestRefs(club.id).pipe(
        take(1),
        defaultIfEmpty([{}]),
        startWith([{}]),
      )),
      concatMap((clubRequestArray:any) => from(clubRequestArray)),
      tap((request:any)=>console.log(request.id)),
      concatMap(user => 
          this.userProfileService.getUserProfileById(user.id).pipe(
            take(1), 
            map(user=>{
              return [{...user, clubId: this.club.id}]
            }),
            catchError(error => {
              console.error('Error fetching teamadmin:', error);
              return of([]);
            })
          )
      ),
      tap(users => users.forEach(n => requestList.push(n))),
      finalize(() => console.log("Club Requests"))
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

  async deleteClubRequest(request) {
    console.log(request);
    await this.fbService.deleteUserClubRequest(request.clubId, request.id);
    await this.toastActionSaved();
  }
  async approveClubRequest(request) {
    console.log(request);
    await this.fbService.approveUserClubRequest(request.clubId, request.id);
    await this.toastActionSaved();
    this.joinTeamAlert(request);
  }

  joinTeamAlert(request) {
    let teamList = [];
    const teams$ = this.fbService.getClubTeamRefs(request.clubId).pipe(
      take(1),
      concatMap((teamArray:any) => from(teamArray)),
      tap((team:any)=>console.log(team.id)),
      concatMap((team:any) => 
        this.fbService.getTeamRef(team.id).pipe(
          take(1),
          tap(team=>teamList.push(team)),
        )),
      finalize(()=>console.log("teams done"))
    );

    this.subscription = forkJoin([teams$]).subscribe({
      next: () => {
        console.log("teams");
        const alertInputs = [];
        for (const item of teamList){
          // console.log(item)
          alertInputs.push({
            label: item.name,
            type: 'checkbox',
            value: item.id,
          });
        }
      
        this.alertCtrl.create({
          message: 'Wähle ein Team aus:',
          subHeader: 'Füge das Mitglied den Teams hinzu',
          inputs: alertInputs,
          buttons: [
            {
              text: "auswählen",
              role: "confirm",
              handler: async (data: any) => {
                // console.log(data);
                data.forEach(teamId=>{
                  this.fbService.approveUserTeamRequest(teamId, request.id)
                })
                const toast = await this.toastCtrl.create({
                  message: "Mitglied hinzugefügt",
                  color: "primary",
                  duration: 1500,
                  position: "bottom",
                });
                await toast.present();
              },
            },
            {
              text: "abbrechen",
              role: "cancel",
              handler: () => {
                console.log("abbrechen");
              },
            },
          ],
          htmlAttributes: { 'aria-label': 'alert dialog' },
           
        }).then(alert => {
          alert.present();
        });
      },
      error: err => console.error('Error in the observable chain:', err)
    });
  }


  async toastActionSaved() {
    const toast = await this.toastCtrl.create({
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
    return await this.modalCtrl.dismiss(this.club, "confirm");
  }
}
