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

  alertTeamSelection = [];

  private subscription: Subscription;

  private subscriptionRequest: Subscription;
  private subscriptionAdmin: Subscription;
  private subscriptionMember: Subscription;


  private subscriptionTeamList: Subscription;
  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly alertCtrl: AlertController,
    private readonly toastCtrl: ToastController,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService
  ) {}

  ngOnInit() {
    this.club = this.navParams.get("data");

    const teamList: any[] = [];

    const teams$ = this.fbService.getClubTeamRefs(this.club.id).pipe(
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

    this.subscriptionTeamList = forkJoin([teams$]).subscribe({
      next: () => {
        console.log("teams");
        this.alertTeamSelection = [];
        for (const item of teamList){
          // console.log(item)
          this.alertTeamSelection.push({
            label: item.name,
            type: 'checkbox',
            value: item.id,
          });
        }
      },
      error: err => console.error('Error in the observable chain:', err)
    });

    const TIMEOUT_DURATION = 1000; // 5 seconds, adjust as needed

    const memberList: Profile[] = [];
    const adminList: Profile[] = [];
    const requestList: any[] = [];

    /*
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
    )*/

    const member$ = this.fbService.getClubRef(this.club.id).pipe( 
      take(1), 
      switchMap(club => this.fbService.getClubMemberRefs(club.id).pipe(
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
              return [{...user, clubId: this.club.id}]
            }),
            catchError(error => {
              console.error('Error fetching member:', error);
              return of([]);
            })
          )
      ),
      tap(users => users.forEach(n => memberList.push(n))),
      finalize(() => console.log("Club Member"))
    )

    this.subscriptionMember = member$.subscribe({
      next: () => {
        this.memberList$ = of(memberList.filter(obj => Object.keys(obj).length > 1));
      },
      error: err => console.error('Error in the observable chain:', err)
    });

    const admin$ = this.fbService.getClubRef(this.club.id).pipe( 
      take(1), 
      switchMap(club => this.fbService.getClubAdminRefs(club.id).pipe(
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

    this.subscriptionAdmin = admin$.subscribe({
      next: () => {
        this.adminList$ = of(adminList.filter(obj => Object.keys(obj).length > 1));
      },
      error: err => console.error('Error in the observable chain:', err)
    });


    const requests$ = this.fbService.getClubRef(this.club.id).pipe( 
      take(1), 
      switchMap(club => this.fbService.getClubRequestRefs(club.id).pipe(
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

    this.subscriptionRequest = requests$.subscribe({
      next: () => {
        this.requestList$ = of(requestList.filter(obj => Object.keys(obj).length > 1));
      },
      error: err => console.error('Error in the observable chain:', err)
    });

    /*const requests$ = this.fbService.getClubRef(this.club.id).pipe( 
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
    this.subscription = combineLatest([member$, admin$]).subscribe({
      next: () => {
        this.adminList$ = of(adminList.filter(obj => Object.keys(obj).length > 1))
        this.memberList$ = of(memberList.filter(obj => Object.keys(obj).length > 1))
        this.requestList$ = of(requestList.filter(obj => Object.keys(obj).length > 1));
      },
      error: err => console.error('Error in the observable chain:', err)
    });*/
  }

  ngOnDestroy() {

    if (this.subscriptionAdmin) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionMember) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionRequest) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionTeamList) {
      this.subscriptionTeamList.unsubscribe();
    }
  }

  async approveClubRequest(user){
    console.log(user);
    const alert = await this.alertCtrl.create({
      message: `Möchtest du ${user.firstName} ${user.lastName} deinem Club hinzufügen?`,
      subHeader: '',
      buttons: [
        {
          text: "Ja!",
          role: "confirm",
        },
        {
          text: "abbrechen",
          role: "cancel",
        
        },
      ],
      htmlAttributes: { 'aria-label': 'alert dialog' },
        
    });
    await alert.present();
    const { role, data } = await alert.onDidDismiss();

    if (role == "confirm") {
      await this.fbService.approveUserClubRequest(user.clubId, user.id);
      const toast = await this.toastCtrl.create({
        message: `${user.firstName} ${user.lastName} wurde erfolgreich dem Club hinzugefügt`,
        color: "primary",
        duration: 1500,
        position: "bottom",
      });
      await toast.present(); 

      await this.assignTeamAlert(user);
    } else {
      await this.toastActionCanceled();
    }
    
  }


  async assignTeamAlert(user) {
    console.log(user);
    const alert = await this.alertCtrl.create({
      header: `Team auswählen`,
      message: `Möchtest du ${user.firstName} ${user.lastName} einem Team hinzufügen?`,
      inputs: this.alertTeamSelection,
      buttons: [
        {
          text: "hinzufügen",
          role: "confirm",
        },
        {
          text: "Abbrechen",
          role: "cancel",
        
        },
      ],
      htmlAttributes: { 'aria-label': 'alert dialog selcting teams' },
        
    });
    await alert.present();
    const { role, data } = await alert.onDidDismiss();
    console.log(data);

    if (role == "confirm") {
      for (const teamId of data.values){
        await this.fbService.approveUserTeamRequest(teamId, user.id)
      }
      const toast = await this.toastCtrl.create({
        message: `${user.firstName} ${user.lastName} wurde erfolgreich ${data.values.length} Team(s) hinzugefügt`,
        color: "primary",
        duration: 1500,
        position: "bottom",
      });
      await toast.present(); 
      
    } else {
      await this.toastActionCanceled();
    }

  }

  async deleteClubRequest(user) {
    console.log(user);
    await this.fbService.deleteUserClubRequest(user.clubId, user.id);
    await this.toastActionSaved();
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

  async toastActionCanceled() {
    const toast = await this.toastCtrl.create({
      message: "Aktion wurde abgebrochen",
      duration: 1500,
      position: "bottom",
      color: "danger",
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
