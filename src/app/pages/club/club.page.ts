import { Component, Input, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  NavParams,
  ToastController,
} from "@ionic/angular";
import { User } from "firebase/auth";
import { Observable, Subscription, catchError, combineLatest, concat, concatAll, concatMap, defaultIfEmpty, filter, finalize, forkJoin, from, map, merge, mergeMap, of, shareReplay, startWith, switchMap, take, tap, timeout, toArray } from "rxjs";
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

  private subscription: Subscription;

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly authService: AuthService,
    private readonly alertController: AlertController,
    private readonly toastController: ToastController,
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
    await this.joinTeamAlert();

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
    return await this.modalCtrl.dismiss(this.club, "confirm");
  }


  async joinTeamAlert() {
    let _inputs = [];
/*
    if (this.teamList.length > 0) {
      for (const team of this.availableTeamList) {
        _inputs.push({
          label: team.liga + " " + team.name,
          type: "radio",
          value: team.id,
        });
      }
    } else {
      for (const team of this.availableTeamList) {
        _inputs.push({
          label: team.liga + " " + team.name,
          type: "radio",
          value: team.id,
        });
      }
    }
    _inputs = _inputs.sort((a, b) => Number(a.id) - Number(b.id));
    _inputs = [...new Set(_inputs)];

    const alert = await this.alertController.create({
      header: "Wähle dein Team aus:",
      buttons: [
        {
          text: "auswählen",
          role: "confirm",
          handler: async (data: any) => {
            // console.log(data);
            this.fbService.setTeamRequest(data, this.user);
            const toast = await this.toastController.create({
              message: "Anfrage an Team gesendet",
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
      inputs: _inputs,
    });

    await alert.present();
    */
  }

  getAvailableTeamList() {
    /*
    // console.log("getAvailableTeamList");
    this.clubTeamListSub = this.fbService
      .getClubTeamRefs(this.club.id)
      .pipe(
        switchMap((allTeams: any) =>
          combineLatest(
            allTeams.map((team) =>
              combineLatest(of(team), this.fbService.getTeamRef(team.id))
            )
          )
        )
      )
      .subscribe(async (data: any) => {
        let availableTeamListNew = [];
        this.availableTeamList = [];

        for (const team of data[0][1]) {
          // loop over teams
          const teamDetail = team[1];
          console.log(teamDetail.id);
          availableTeamListNew.push(teamDetail);
        }
        availableTeamListNew = availableTeamListNew.sort(
          (a, b) => Number(a.id) - Number(b.id)
        );

        this.availableTeamList = [
          ...new Set(availableTeamListNew.concat(...this.availableTeamList)),
        ];
      });
      */
  }
}
