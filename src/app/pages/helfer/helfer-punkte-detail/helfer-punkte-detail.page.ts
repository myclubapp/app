import { Component, Input, OnInit } from '@angular/core';
import { AlertController, IonItemSliding, ModalController, ToastController } from '@ionic/angular';
import { catchError, lastValueFrom, Observable, of, tap } from 'rxjs';
import { Club } from 'src/app/models/club';
import { HelferDetailPage } from '../helfer-detail/helfer-detail.page';
import { HelferService } from 'src/app/services/firebase/helfer.service';
import { TranslateService } from '@ngx-translate/core';
import { Timestamp } from 'firebase/firestore';
import { FirebaseService } from 'src/app/services/firebase.service';

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
    private readonly helferService: HelferService,
    private readonly alertController: AlertController,
    private readonly toastController: ToastController,
    private readonly translate: TranslateService,
    private modalCtrl: ModalController,
    private readonly fbService: FirebaseService
  ) { }

  ngOnInit() {
        // Load admin list
        this.clubAdminList$ = this.fbService.getClubAdminList().pipe(
          tap(admins => console.log('Club admin list loaded:', admins)),
          catchError(err => {
            console.error('Error loading admin list:', err);
            return of([]);
          })
        );
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
  async presentToast() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(this.translate.get("common.success__saved")),
      color: "success",
      duration: 1500,
      position: "top",
    });
    toast.present();
  }

  async changeHelferPunkt(slidingItem: IonItemSliding, helferPunktEvent: any) {
    await slidingItem.closeOpened();
    const alert = await this.alertController.create({
      header: 'Helferpunkt ändern',
      inputs: [
        {
          name: 'description',
          type: 'text' as const,
          placeholder: 'Beschreibung',
          label: 'Beschreibung',
          value: helferPunktEvent.description
        },
        {
          name: 'date',
          type: 'date' as const,
          label: 'Datum',
          value: helferPunktEvent.date?.toDate().toISOString().split('T')[0]
        },
        {
          name: 'points',
          type: 'number' as const,
          placeholder: 'Punkte',
          label: 'Punkte',
          value: helferPunktEvent.points.toString(),
          min: '1',
          max: '10'
        }
      ],
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel'
        },
        {
          text: 'Speichern',
          handler: async (data) => {
            if (!data.description || !data.date || !data.points) {
              const toast = await this.toastController.create({
                message: 'Bitte füllen Sie alle Felder aus',
                duration: 2000,
                color: 'warning'
              });
              await toast.present();
              return false;
            }

            try {
              await this.helferService.updateHelferPunkt(this.clubId, helferPunktEvent.id, {
                description: data.description,
                date: Timestamp.fromDate(new Date(data.date)),
                points: Number(data.points)
              });

              const toast = await this.toastController.create({
                message: 'Helferpunkt erfolgreich geändert',
                duration: 2000,
                color: 'success'
              });
              await toast.present();
              
              this.initializeData();
              return true;
            } catch (error) {
              console.error('Error updating helferpunkt:', error);
              const toast = await this.toastController.create({
                message: 'Fehler beim Ändern des Helferpunkts',
                duration: 2000,
                color: 'danger'
              });
              await toast.present();
              return false;
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async deleteHelferPunkt(slidingItem: IonItemSliding, helferPunktEvent: any) {
    await slidingItem.closeOpened();
    const alert = await this.alertController.create({
      header: 'Helferpunkt löschen',
      message: 'Möchten Sie diesen Helferpunkt wirklich löschen?',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel'
        },
        {
          text: 'Löschen',
          handler: async () => {
            try {
              await this.helferService.deleteHelferPunkt(this.clubId, helferPunktEvent.id);
              this.toastController.create({
                message: 'Helferpunkt erfolgreich gelöscht',
                duration: 2000,
                color: 'success'
              }).then(toast => toast.present());
              this.initializeData();
            } catch (error) {
              this.toastController.create({
                message: 'Fehler beim Löschen des Helferpunkts',
                duration: 2000,
                color: 'danger'
              }).then(toast => toast.present());
            }
          }
        }
      ]
    });
    await alert.present();
  }

  private async initializeData() {
    try {
      const helferPunkte = await this.helferService.getHelferPunkte(this.clubId);
      this.member.helferevents = helferPunkte.filter((event: any) => event.userId === this.member.id);
    } catch (error) {
      console.error('Fehler beim Laden der Helferpunkte:', error);
    }
  }

}
