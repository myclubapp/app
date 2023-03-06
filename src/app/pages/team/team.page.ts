import { Component, Input, OnInit } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import { combineLatest, of } from "rxjs";
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

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService
  ) {}

  ngOnInit() {
    this.team = this.navParams.get("data");

    this.getTeamMembers();
    this.getTeamAdmins();
    this.getTeamRequests();
  }

  getTeamMembers() {
    this.fbService
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
      .subscribe((data) => {
        // console.log(data);

        this.memberList = [];
        for (const member of data) {
          this.memberList.push(member[1]);
        }
      });
  }
  getTeamAdmins() {
    this.fbService
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
      .subscribe((data) => {
        // console.log(data);

        this.adminList = [];
        for (const member of data) {
          this.adminList.push(member[1]);
        }
      });
  }

  getTeamRequests() {
    this.fbService
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
      .subscribe((data) => {
        //console.log(data);
        this.requestList = [];
        for (const member of data) {
          this.requestList.push(member[1]);
        }
      });
  }

  async deleteTeamRequest(request) {
    await this.fbService.deleteUserTeamRequest(this.team.id, request.id);
    this.getTeamRequests();
  }
  async approveTeamRequest(request) {
    await this.fbService.setApproveUserTeamRequest(this.team.id, request.id);
    this.getTeamRequests();
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.team, "confirm");
  }
}
