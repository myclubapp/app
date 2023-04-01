import { Component, Input, OnInit } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import { combineLatest, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Club } from "src/app/models/club";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";

@Component({
  selector: "app-club",
  templateUrl: "./club.page.html",
  styleUrls: ["./club.page.scss"],
})
export class ClubPage implements OnInit {
  @Input("data") club: Club;

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
    this.club = this.navParams.get("data");

    this.getClubMembers();
    this.getClubAdmins();
    this.getClubRequests();
  }
  getClubMembers() {
    this.fbService
      .getClubMemberRefs(this.club.id)
      .pipe(
        switchMap((allClubMembers: any) =>
          combineLatest(
            allClubMembers.map((member) =>
              combineLatest(
                of(member),
                this.userProfileService.getUserProfileById(member.id)
              )
            )
          )
        )
      )
      .subscribe((data:any) => {
        this.memberList = [];
        for (const member of data) {
          this.memberList.push(member[1]);
        }
      });
  }
  getClubAdmins() {
    this.fbService
      .getClubAdminRefs(this.club.id)
      .pipe(
        switchMap((allClubMembers: any) =>
          combineLatest(
            allClubMembers.map((member) =>
              combineLatest(
                of(member),
                this.userProfileService.getUserProfileById(member.id)
              )
            )
          )
        )
      )
      .subscribe((data:any) => {
        this.adminList = [];
        for (const member of data) {
          this.adminList.push(member[1]);
        }
      });
  }

  getClubRequests() {
    this.fbService
      .getClubRequestRefs(this.club.id)
      .pipe(
        switchMap((allClubMembers: any) =>
          combineLatest(
            allClubMembers.map((member) =>
              combineLatest(
                // of(member),
                this.userProfileService.getUserProfileById(member.id)
              )
            )
          )
        )
      )
      .subscribe((data:any) => {
        this.requestList = [];
        for (const member of data) {
          this.requestList.push(member);
        }
      });
  }

  async deleteClubRequest(request) {
    await this.fbService.deleteUserClubRequest(this.club.id, request.id);
    // this.getClubRequests();
  }
  async approveClubRequest(request) {
    await this.fbService.setApproveUserClubRequest(this.club.id, request.id);
    // this.getClubRequests();
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.club, "confirm");
  }
}
