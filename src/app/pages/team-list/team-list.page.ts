import {ModalController, IonRouterOutlet, NavParams} from '@ionic/angular';
import {UnihockeyService} from './../../services/verband/unihockey.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.page.html',
  styleUrls: ['./team-list.page.scss'],
})
export class TeamListPage implements OnInit {
  unihockeyTeamList: Array<any> = [];
  unihockeyTeamListBackup: Array<any> = [];
  rippleList = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  public clubId;
  public clubName;
  constructor(private navParams: NavParams, private unihockey: UnihockeyService, private modalCtrl: ModalController) {
    //this.clubId = this.navParams.get('clubId');
  }

  ngOnInit() {
    this.clubId = this.navParams.get('clubId');
    this.clubName = this.navParams.get('clubName');

    this.unihockey.getCurrentSeason().subscribe((season: any) => {
      this.unihockey.getTeams(this.clubId, season.data.season).subscribe((data: any) => {
        this.unihockeyTeamListBackup = data.data;
        this.unihockeyTeamList = data.data;
      });
    });
  }

  filterList(event) {
    this.unihockeyTeamList = this.unihockeyTeamListBackup.filter((element: any) => {
      return element.text.toLowerCase().includes(event.srcElement.value.toLowerCase());
    });
  }

  next() {
    let array = this.unihockeyTeamList.filter((element) => {
      return element.isSelected;
    });
    this.modalCtrl.dismiss({
      dismissed: true,
      teams: array,
    });
  }

  dismiss() {
    /*let array = this.unihockeyClubList.filter(element=>{
      return element.isSelected;
    });*/

    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true,
      //  'data': array
    });
  }
}
