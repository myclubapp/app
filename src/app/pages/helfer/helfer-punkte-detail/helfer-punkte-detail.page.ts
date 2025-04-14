import { Component, Input, OnInit } from '@angular/core';
import { AlertController, IonItemSliding, ModalController, NavParams, ToastController } from '@ionic/angular';
import { catchError, lastValueFrom, Observable, of, tap, from, combineLatest, map, switchMap, take, Subscription } from 'rxjs';
import { Club } from 'src/app/models/club';
import { HelferDetailPage } from '../helfer-detail/helfer-detail.page';
import { HelferService } from 'src/app/services/firebase/helfer.service';
import { TranslateService } from '@ngx-translate/core';
import { Timestamp } from 'firebase/firestore';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserProfileService } from 'src/app/services/firebase/user-profile.service';

@Component({
  standalone: false,
  selector: 'app-helfer-punkte-detail',
  templateUrl: './helfer-punkte-detail.page.html',
  styleUrls: ['./helfer-punkte-detail.page.scss'],
})
export class HelferPunkteDetailPage implements OnInit {
  @Input("data") helferData: any;
  @Input("clubId") clubId: string;
  clubAdminList$: Observable<Club[]>;
  helferPunkteList$: Observable<any[]>;
  groupArray: number[] = [];
  allowEdit: boolean = false;
  private subscription: Subscription;
  constructor(
    private readonly helferService: HelferService,
    private readonly alertController: AlertController,
    private readonly toastController: ToastController,
    private readonly translate: TranslateService,
    private modalCtrl: ModalController,
    private readonly fbService: FirebaseService,
    private readonly userProfileService: UserProfileService,
    private readonly navParams: NavParams
  ) {

  }

  ngOnInit() {
    this.helferData = this.navParams.get("data");
    this.clubId = this.navParams.get("clubId");
    console.log('helferData', this.helferData);
    console.log('clubId', this.clubId);
    this.helferPunkteList$ = this.getHeferEinsatz(this.helferData.profile.id, this.clubId);

    // Load admin list
    this.clubAdminList$ = this.fbService.getClubAdminList().pipe(
      tap(admins => console.log('Club admin list loaded:', admins)),
      catchError(err => {
        console.error('Error loading admin list:', err);
        return of([]);
      })
    );

    this.subscription = this.helferPunkteList$.subscribe(helferPunkte => {
      // Extrahiere alle Jahre aus den eventDates
      const years = helferPunkte
        .map(punkt => new Date(punkt.eventDate.toDate()).getFullYear())
        .filter((year, index, self) => self.indexOf(year) === index) // Entferne Duplikate
        .sort((a, b) => b - a); // Sortiere absteigend

      this.groupArray = years;
    });


  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getHeferEinsatz(profileId: string, clubId: string) {
    // Load helfer punkte for specific user and club
    return this.helferService.getUserHelferPunkteRefs(profileId, clubId).pipe(
      
      switchMap(helferPunkte => {
        if (!helferPunkte || helferPunkte.length === 0) {
          return of([]);
        }

        // Für jeden HelferPunkt die Benutzerinformationen des bestätigenden Benutzers abrufen
        const helferPunkteWithUser$ = helferPunkte.map(punkt => {
          // Prüfe ob confirmedBy existiert und die richtige Struktur hat
          if (!punkt.confirmedBy || !punkt.confirmedBy.id) {
            return of({
              ...punkt,
              confirmedByFirstName: 'Unbekannt',
              confirmedByLastName: ''
            });
          }

          return this.userProfileService.getUserProfileById(punkt.confirmedBy.id).pipe(
            map((user: any) => ({
              ...punkt,
              confirmedByFirstName: user?.firstName || 'Unbekannt',
              confirmedByLastName: user?.lastName || ''
            })),
            catchError((error) => {
              console.warn(`Fehler beim Laden des Benutzerprofils für Helferpunkt ${punkt.id}:`, error);
              return of({
                ...punkt,
                confirmedByFirstName: 'Unbekannt',
                confirmedByLastName: ''
              });
            })
          );
        });

        return combineLatest(helferPunkteWithUser$).pipe(
          catchError((error) => {
            console.error('Fehler beim Kombinieren der Helferpunkte:', error);
            return of(helferPunkte.map(punkt => ({
              ...punkt,
              confirmedByFirstName: 'Unbekannt',
              confirmedByLastName: ''
            })));
          })
        );
      }),
      tap(helferPunkte => {
        // Gruppiere die Helferpunkte nach Jahren
        const years = new Set(helferPunkte.map(punkt => punkt.eventDate.toDate().getFullYear()));
        this.groupArray = Array.from(years).sort((a, b) => b - a);
        console.log('Helferpunkte geladen:', helferPunkte);
      }),
      catchError(err => {
        console.error('Fehler beim Laden der Helferpunkte:', err);
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

  async openHelferEinsatz(event: any) {

    if (!event.eventRef) {
      const toast = await this.toastController.create({
        message: 'Diese Funktion ist leider nicht verfügbar',
        duration: 2000,
        position: 'top',
        color: 'primary'
      });
      await toast.present();
      return;
    }
    console.log(event.eventRef.id);
    const modal = await this.modalCtrl.create({
      component: HelferDetailPage,
      presentingElement: await this.modalCtrl.getTop(),
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: { id: event.eventRef.id, clubId: this.clubId },
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

  async editHelferPunkt(slidingItem: IonItemSliding, helferPunktEvent: any) {
    await slidingItem.closeOpened();
    const alert = await this.alertController.create({
      header: 'Helferpunkt ändern',
      inputs: [
        {
          name: 'name',
          type: 'text' as const,
          placeholder: 'Beschreibung',
          label: 'Beschreibung',
          value: helferPunktEvent.name
        },
        {
          name: 'eventDate',
          type: 'date' as const,
          label: 'Datum',
          value: helferPunktEvent.eventDate?.toDate().toISOString().split('T')[0]
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
            if (!data.name || !data.eventDate || !data.points) {
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
                name: data.name,
                eventName: data.name,
                eventDate: Timestamp.fromDate(new Date(data.eventDate)),
                points: Number(data.points)
              });

              const toast = await this.toastController.create({
                message: 'Helferpunkt erfolgreich geändert',
                duration: 2000,
                color: 'success'
              });
              await toast.present();

              this.ngOnInit();
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
              this.ngOnInit();
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
  async openHelferPunktCreateModal() {

    // Zweiter Alert für Details
    const detailsAlert = await this.alertController.create({
      header: 'Helferpunkt Details',
      inputs: [
        {
          name: 'name',
          type: 'text' as const,
          placeholder: 'Beschreibung',
          label: 'Beschreibung'
        },
        {
          name: 'date',
          type: 'date' as const,
          label: 'Datum'
        },
        {
          name: 'points',
          type: 'number' as const,
          placeholder: 'Punkte',
          label: 'Punkte',
          value: '1',
          min: '1',
          max: '10'
        }
      ],
      buttons: [
        {
          text: 'Zurück',
          role: 'cancel',
          handler: () => {
          
            return false;
          }
        },
        {
          text: 'Speichern',
          role: 'confirm',
          handler: async (details) => {
            if (!details.name || !details.date || !details.points) {
              const toast = await this.toastController.create({
                message: 'Bitte füllen Sie alle Felder aus',
                duration: 2000,
                position: 'top',
                color: 'warning'
              });
              await toast.present();
              return false;
            }

            try {
              const helferPunkt = await this.helferService.createHelferPunkt(this.clubId, this.helferData.profile.id, details.name, details.date, Number(details.points));
              console.log('helferPunkt id', helferPunkt.id);

              const toast = await this.toastController.create({
                message: 'Helferpunkt erfolgreich erstellt',
                duration: 2000,
                position: 'top',
                color: 'success'
              });
              await toast.present();
              return true;
            } catch (error) {
              console.error('Error creating Helferpunkt:', error);
              const toast = await this.toastController.create({
                message: 'Fehler beim Erstellen des Helferpunkts',
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
    detailsAlert.present();
  }
}
