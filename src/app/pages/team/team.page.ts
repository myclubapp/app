import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { ModalController, NavParams, ToastController } from "@ionic/angular";
import { User } from "firebase/auth";
import { Observable, Subscription, catchError, combineLatest, concat, concatAll, concatMap, defaultIfEmpty, finalize, forkJoin, from, map, merge, mergeMap, of, shareReplay, startWith, switchMap, take, tap, timeout, toArray } from "rxjs";
import { Team } from "src/app/models/team";
import { Profile } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";

@Component({
  selector: "app-team",
  templateUrl: "./team.page.html",
  styleUrls: ["./team.page.scss"],
})
export class TeamPage implements OnInit {
  @Input("data") team: Team;

  team$: Observable<any>;

  user$: Observable<User>;
  user: User;

  allowEdit: boolean = false;

  memberList$: Observable<Profile[]>;
  adminList$: Observable<Profile[]>;
  requestList$: Observable<Profile[]>;


  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly toastController: ToastController,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService,
    private readonly authService: AuthService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.team = this.navParams.get("data");
    this.team$ = of(this.team);

    this.team$ = this.getClub(this.team.id);
    this.team$.subscribe({
      next: (data) => {
        console.log(">> Tean Data" );
        console.log( data);
        this.cdr.detectChanges();
  
  
      },
      error: (err) => console.error("Team Error in subscription:", err),
      complete: () => console.log("team Observable completed")
    });
  }

  ngOnDestroy() {

  }

  getClub(teamId: string) {
 
    return this.authService.getUser$().pipe(
      take(1),
      tap(user => {
        this.user = user;
        if (!user) throw new Error("User not found");
      }),
      switchMap(() => this.fbService.getTeamRef(teamId)),
      switchMap(team => {
        if (!team) return of(null);
        return combineLatest({
          teamMembers: this.fbService.getTeamMemberRefs(teamId),
          teamAdmins: this.fbService.getTeamAdminRefs(teamId)
        }).pipe(
          switchMap(({ teamMembers, teamAdmins }) => {
            const memberProfiles$ = teamMembers.map(member => 
              this.userProfileService.getUserProfileById(member.id).pipe(take(1),
                catchError(() => of({ ...member, firstName: 'Unknown', lastName: 'Unknown' }))
              )
            );
            const adminProfiles$ = teamAdmins.map(admin => 
              this.userProfileService.getUserProfileById(admin.id).pipe(take(1),
                catchError(() => of({ ...admin, firstName: 'Unknown', lastName: 'Unknown' }))
              )
            );
            return forkJoin({
              teamMembers: forkJoin(memberProfiles$),
              teamAdmins: forkJoin(adminProfiles$)
            }).pipe(
              map(({ teamMembers, teamAdmins }) => ({
                teamMembers: teamMembers.filter(member => member !== undefined), // Filter out undefined
                teamAdmins: teamAdmins.filter(admin => admin !== undefined) // Filter out undefined
              })
            ));
          }),
          map(({ teamMembers, teamAdmins }) => ({
            ...team,
            teamMembers,
            teamAdmins
          }))
        );
      }),
      catchError(err => {
        console.error("Error in getClubWithMembersAndAdmins:", err);
        return of(null); 
      })
    );
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
