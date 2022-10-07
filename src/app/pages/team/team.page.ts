import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { combineLatest, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Team } from 'src/app/models/team';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserProfileService } from 'src/app/services/firebase/user-profile.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {
  @Input('data') team: Team;

  memberList: any[] = [];
  adminList: any[] = [];

  constructor(
    private modalCtrl: ModalController,
    public navParams: NavParams,
    private userProfileService: UserProfileService,
    private fbService: FirebaseService
  ) {}
  ngOnInit() {
    this.team = this.navParams.get('data');

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
        for (let member of data) {
          this.memberList.push(member[1]);
        }
      });
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
        for (let member of data) {
          this.adminList.push(member[1]);
        }
      });
  }
  close() {
    return this.modalCtrl.dismiss(null, 'close');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.team, 'confirm');
  }
}
