import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Club } from 'src/app/models/club';
import { HelferDetailPage } from '../helfer-detail/helfer-detail.page';
@Component({
  standalone: false,
  selector: 'app-helfer-punkte-detail',
  templateUrl: './helfer-punkte-detail.page.html',
  styleUrls: ['./helfer-punkte-detail.page.scss'],
})
export class HelferPunkteDetailPage implements OnInit {
  @Input("member") member: any;
  @Input("clubId") clubId: string;
  clubAdminList$: Observable<Club[]>;
  allowEdit: boolean = false;
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }
  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(null, "confirm");
  }
  edit() {
    this.allowEdit = !this.allowEdit;
  }
  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return clubAdminList.some(admin => admin.id === clubId);
  }

  async openHelferEvent(event: any) {
    console.log(event.eventRef.id);
    const modal = await this.modalCtrl.create({
      component: HelferDetailPage,
      presentingElement: await this.modalCtrl.getTop(),
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: {id: event.eventRef.id, clubId: this.clubId},
        isFuture: false  
      }
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === "confirm") {
      // Refresh the list if confirmed
    } else if (role === "close") {
      // Refresh the list if closed
    }
  }

}
