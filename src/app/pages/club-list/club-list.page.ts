import { TeamListPage } from './../team-list/team-list.page';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { UnihockeyService } from './../../services/verband/unihockey.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.page.html',
  styleUrls: ['./club-list.page.scss'],
})
export class ClubListPage implements OnInit {
  skeletonList = ["","","","","","","","","","","","","","","",""];
  unihockeyClubList: Array<any> = [];
  unihockeyClubListBackup:  Array<any> = [];
  constructor(
    private unihockey: UnihockeyService,
    private modalCtrl: ModalController

  ) { }

  ngOnInit() {
    //console.log("init");
    this.unihockey.getClubs().subscribe((data: any)=>{
      this.unihockeyClubListBackup = data.data;
      this.unihockeyClubList = data.data;
    })
  }

  filterList(event){
    this.unihockeyClubList = this.unihockeyClubListBackup.filter((element: any)=>{
      return element.text.toLowerCase().includes(event.srcElement.value.toLowerCase());
    })
  }


  next(){
    let array = this.unihockeyClubList.filter(element=>{
      return element.isSelected;
    });
  
        // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true,
      'clubs': array
    });
  }

  dismiss() {
    /*let array = this.unihockeyClubList.filter(element=>{
      return element.isSelected;
    });*/

    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true,
    //  'data': array
    });
  }

}
