import { Component, Input, OnInit } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import { Observable, of } from "rxjs";
import { Profile } from "src/app/models/user";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";

@Component({
  selector: "app-member",
  templateUrl: "./member.page.html",
  styleUrls: ["./member.page.scss"],
})
export class MemberPage implements OnInit {
  @Input("data") userProfile: Profile;
  userProfile$: Observable<Profile>;
  skeleton = new Array(12);
  constructor(
    private readonly modalCtrl: ModalController,
    private readonly profileService: UserProfileService,
    private navParams: NavParams
  ) {}

  ngOnInit() {
    this.userProfile = this.navParams.get("data");
    this.userProfile$ = of(this.userProfile);
    this.userProfile$ = this.getUserProfile(this.userProfile.id);
  }

  getUserProfile(id) {
    return this.profileService.getUserProfileById(id);
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
    // this.navController.pop();
  }

  async confirm() {
    return await this.modalCtrl.dismiss(null, "confirm");
    /*this.navController.navigateBack("championship", {
      state: {
        role: "confirm",
        data: this.game,
      },
    });*/
  }
}
