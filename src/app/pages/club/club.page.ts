import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { combineLatest, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Club } from 'src/app/models/club';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserProfileService } from 'src/app/services/firebase/user-profile.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.page.html',
  styleUrls: ['./club.page.scss'],
})
export class ClubPage implements OnInit {
  @Input('data') club: Club;

  memberList: any[] = [];
  adminList: any[] = [];

  constructor(
    private modalCtrl: ModalController,
    public navParams: NavParams,
    private userProfileService: UserProfileService,
    private fbService: FirebaseService
  ) {}
  ngOnInit() {
    this.club = this.navParams.get('data');

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
      .subscribe((data) => {
        this.memberList = [];
        for (let member of data) {
          this.memberList.push(member[1]);
        }
      });

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
      .subscribe((data) => {
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
    return this.modalCtrl.dismiss(this.club, 'confirm');
  }
}
