import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championship-popover',
  templateUrl: './championship-popover.page.html',
  styleUrls: ['./championship-popover.page.scss'],
})
export class ChampionshipPopoverPage implements OnInit {

  constructor(
    private router: Router,
    public popoverCtrl: PopoverController
    ) { }

  ngOnInit() {}

  openRanking(){
    this.router.navigateByUrl('/home/ranking');
    this.popoverCtrl.dismiss();

  }
  openStatistics(){{
    this.router.navigateByUrl('/home/statistic');
   this.popoverCtrl.dismiss();
  }}


}
