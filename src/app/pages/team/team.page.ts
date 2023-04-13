import { Component, Input, OnInit } from "@angular/core";
import { ModalController, NavParams, ToastController } from "@ionic/angular";
import { combineLatest, of, Subscription } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Team } from "src/app/models/team";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";

@Component({
  selector: "app-team",
  templateUrl: "./team.page.html",
  styleUrls: ["./team.page.scss"],
})
export class TeamPage implements OnInit {
  @Input("data") team: Team;

  memberList: any[] = [];
  adminList: any[] = [];
  requestList: any[] = [];

  teamAdminSub: Subscription;
  teamMemberSub: Subscription;
  teamRequestSub: Subscription;

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly toastController: ToastController,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService
  ) {}

  ngOnInit() {
    this.team = this.navParams.get("data");

    this.getTeamMembers();
    this.getTeamAdmins();
    this.getTeamRequests();
  }

  ngOnDestroy() {
    this.teamAdminSub.unsubscribe();
    this.teamMemberSub.unsubscribe();
    this.teamRequestSub.unsubscribe();
  }
  getTeamMembers() {
    this.teamMemberSub =  this.fbService
      .getTeamMemberRefs(this.team.id)
      .pipe(
        switchMap((allTeamMembers: any) =>
          combineLatest(
            allTeamMembers.map((member) =>
              combineLatest(
                of(member),
                this.userProfileService.getUserProfileById(member.id)
              )
            )
          )
        )
      )
      .subscribe((data:any) => {
        // console.log(data);

        this.memberList = [];
        for (const member of data) {
          this.memberList.push(member[1]);
        }
      });
  }
  getTeamAdmins() {
    this.teamAdminSub = this.fbService
      .getTeamAdminRefs(this.team.id)
      .pipe(
        switchMap((allTeamAdmins: any) =>
          combineLatest(
            allTeamAdmins.map((member) =>
              combineLatest(
                of(member),
                this.userProfileService.getUserProfileById(member.id)
              )
            )
          )
        )
      )
      .subscribe((data:any) => {
        // console.log(data);

        this.adminList = [];
        for (const member of data) {
          this.adminList.push(member[1]);
        }
      });
  }

  getTeamRequests() {
    this.teamRequestSub = this.fbService
      .getTeamRequestRefs(this.team.id)
      .pipe(
        switchMap((allTeamMembers: any) =>
          combineLatest(
            allTeamMembers.map((member) =>
              combineLatest(
                of(member),
                this.userProfileService.getUserProfileById(member.id)
              )
            )
          )
        )
      )
      .subscribe((data:any) => {
        //console.log(data);
        this.requestList = [];
        for (const member of data) {
          this.requestList.push(member[1]);
        }
      });
  }

  async deleteTeamRequest(request) {
    await this.fbService.deleteUserTeamRequest(this.team.id, request.id);
    await this.toastActionSaved();
    this.getTeamRequests();
  }
  async approveTeamRequest(request) {
    await this.fbService.setApproveUserTeamRequest(this.team.id, request.id);
    await this.toastActionSaved();
    this.getTeamRequests();
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
