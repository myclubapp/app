import { Component, Input, OnInit } from '@angular/core';
import { AlertController, IonItemSliding, ModalController, NavParams, ToastController, ToggleChangeEventDetail } from '@ionic/angular';
import { BehaviorSubject, Observable, catchError, combineLatest, debounceTime, forkJoin, lastValueFrom, map, of, switchMap, take, tap } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import { HelferService } from 'src/app/services/firebase/helfer.service';
import { UserProfileService } from 'src/app/services/firebase/user-profile.service';
import { HelferDetailPage } from '../helfer-detail/helfer-detail.page';
import { HelferPunkteDetailPage } from '../helfer-punkte-detail/helfer-punkte-detail.page';
import { Club } from 'src/app/models/club';
import { Timestamp } from 'firebase/firestore';
import { TranslateService } from '@ngx-translate/core';
import { EventService } from 'src/app/services/firebase/event.service';
import { collection, addDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-helfer-punkte-club',
  templateUrl: './helfer-punkte-club.page.html',
  styleUrls: ['./helfer-punkte-club.page.scss'],
    standalone: false
})
export class HelferPunkteClubPage implements OnInit {
  @Input("clubId") clubId: string;
  clubAdminList$: Observable<Club[]>;
  allowEdit: boolean = false;

  club$: Observable<Club | any>;
  clubMembers$: Observable<any[]>;
  filteredClubMembers$: Observable<any[]>;

  groupArray: string[] = [];

  plannedToggle = new BehaviorSubject<boolean>(false);

  searchTerm = new BehaviorSubject<string>('');

  pointsRange = new BehaviorSubject<{ lower: number, upper: number }>({ lower: 0, upper: 99 }); // Default range with higher upper limit

  minDate: string = "";
  maxDate: string = "";

  constructor(
    private readonly modalCtrl: ModalController,
    private translate: TranslateService,
    public navParams: NavParams,
    private readonly alertController: AlertController,
    private readonly helferService: HelferService,
    private readonly eventService: EventService,
    private readonly userProfileService: UserProfileService,
    private readonly toastController: ToastController,
    private readonly fbService: FirebaseService,
    private readonly firestore: Firestore,
  ) {}

  ngOnInit() {
    console.log('ngOnInit called with clubId:', this.clubId);
    // Initialize date ranges
    let dateFrom = new Date();
    dateFrom.setFullYear(new Date().getFullYear() - 2);
    this.minDate = dateFrom.toISOString();

    let dateTo = new Date();
    dateTo.setFullYear(new Date().getFullYear() + 2);
    this.maxDate = dateTo.toISOString();

    // Initialize plannedToggle with false
    this.plannedToggle.next(false);

    // Load club data
    this.club$ = this.fbService.getClubRef(this.clubId).pipe(
      take(1),
      tap(club => {
        console.log('Club data loaded:', club);
        if (!club) {
          console.error('No club found with ID:', this.clubId);
        }
      }),
      catchError(err => {
        console.error('Error loading club data:', err);
        return of(null);
      })
    );

    // Initialize members list
    this.initializeClubMembers(this.clubId);

    // Load admin list
    this.clubAdminList$ = this.fbService.getClubAdminList().pipe(
      tap(admins => console.log('Club admin list loaded:', admins)),
      catchError(err => {
        console.error('Error loading admin list:', err);
        return of([]);
      })
    );

  }
  onHelferPunktePlanned(event: CustomEvent<ToggleChangeEventDetail>) {
  //   this.plannedToggle.next(event.detail['checked']);
  }

  async changeDate(event, fieldname) {
    await this.fbService.setClubHelferReportingDate(this.clubId, fieldname, event.detail.value)
  }
  initializeClubMembers(clubId: string) {
    console.log('initializeClubMembers called with clubId:', clubId);

    this.clubMembers$ = this.fbService.getClubRef(clubId).pipe(
  
      switchMap((club) => {
        if (!club) {
          console.error('No club found for members processing');
          return of([]);
        }

        return this.fbService.getClubMemberRefs(clubId).pipe(
          tap(members => console.log('Club members loaded:', members.length)),
          switchMap(members => {
            if (!members.length) {
              console.log('No members found in club');
              return of([]);
            }
            console.log('Members found in club:', members.length);
            const memberDetails$ = members.map(member =>
              // add helferpunkte to the member
              combineLatest([
                this.userProfileService.getUserProfileById(member.id),
                this.helferService.getUserHelferPunkteRefsWithFilter(
                  member.id, 
                  this.clubId, 
                  Timestamp.fromDate(new Date(club['helferReportingDateFrom'])), 
                  Timestamp.fromDate(new Date(club['helferReportingDateTo']))
                )
              ]).pipe(
                tap(([profile, helferevents]) => {
                  if (!profile) {
                    console.warn(`No profile found for member ${member.id}`);
                  }
                }),
                map(([profile, helferevents]) => {
                  if (!profile) {
                    return {
                      profile: { 
                        ...member, 
                        firstName: "Unknown", 
                        lastName: "Unknown", 
                        roles: member.roles || [] 
                      },
                      groupBy: 'U',
                      roles: member.roles || [],
                      helferevents: helferevents || []
                    };
                  }
                  console.log('helferevents', helferevents);
                  const filteredHelferPunkte = helferevents?.filter(punkt => punkt.status === true) || [];
                  const totalPoints = filteredHelferPunkte.reduce((sum, punkt) => Number(sum) + Number(punkt.points || 0), 0);
                  return {
                    profile,
                    groupBy: profile.firstName ? profile.firstName.charAt(0).toUpperCase() : 'Z',
                    roles: member.roles || [],
                    totalPoints: totalPoints,
                    helferevents: helferevents
                  };
                }),
                catchError(err => {
                  console.error(`Error loading profile for member ${member.id}:`, err);
                  return of({
                    profile: { 
                      ...member, 
                      firstName: "Unknown", 
                      lastName: "Unknown", 
                      roles: member.roles || [] 
                    },
                    groupBy: 'U',
                    roles: member.roles || [],
                    totalPoints: 0,
                    helferevents: []
                  });
                })
              )
            );

            return combineLatest(memberDetails$).pipe(
              catchError(err => {
                console.error('Error combining member details:', err);
                return of([]);
              })
            );
          }),
          map(memberDetails => {
            // Update groupArray based on available data
            const groups = [...new Set(memberDetails.map(
              member => member.groupBy
            ))].sort();
            
            // Only update if we have results, otherwise keep existing groups
            if (groups.length > 0) {
              this.groupArray = groups;
            }
            
            console.log('Final member details count:', memberDetails.length);
            console.log('Group array:', this.groupArray);
            
            return memberDetails.sort((a, b) => 
              a.profile.firstName.localeCompare(b.profile.firstName)
            );
          })
        );
      }),
      catchError(err => {
        console.error('Error in outer stream:', err);
        return of([]);
      })
    );

    // Apply search filter
    this.filteredClubMembers$ = combineLatest([
      this.clubMembers$,
      this.searchTerm
    ]).pipe(
      debounceTime(300),
      map(([members, term]) => {
        console.log(`Filtering ${members.length} members with term "${term}"`);
        
        return members.filter(member => {
          if (!term) return true;
          
          return (
            member.profile.firstName?.toLowerCase().includes(term.toLowerCase()) ||
            member.profile.lastName?.toLowerCase().includes(term.toLowerCase())
          );
        });
      }),
      tap(filtered => {
        console.log(`Filtered to ${filtered.length} members`);
        
        const filteredGroups = [...new Set(filtered.map(
          member => member.profile.firstName?.charAt(0).toUpperCase() || 'Z'
        ))].sort();
        
        if (filteredGroups.length > 0) {
          this.groupArray = filteredGroups;
        }
        
        console.log('Updated group array after filtering:', this.groupArray);
      }),
      catchError(err => {
        console.error("Error filtering members:", err);
        return of([]);
      })
    );
  }

  handleSearch(event: any) {
    const searchTerm = event.detail.value || '';
    console.log('Handling Search Event:', searchTerm);
    this.searchTerm.next(searchTerm.trim());
  }


  async openHelferPunktDetailModal(member) {
    console.log('openHelferPunktDetailModal', member);
    const modal = await this.modalCtrl.create({
      component: HelferPunkteDetailPage,
      presentingElement: await this.modalCtrl.getTop(),
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        member: member,
        clubId: this.clubId
      }
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === "confirm") {
      // Refresh the list if confirmed
    }
  }




  async changeHelferPunkt(slidingItem: IonItemSliding, member, helferPunkt) {
    await slidingItem.closeOpened();

    const alert = await this.alertController.create({
      message: "asdasd",
      header: "Helferpunkt ändern",
      inputs: [{
        id: "points",
        value: helferPunkt.points
      }],
      buttons: [{
        "id": "ok",
        "text": "Speichern",
        handler: (data) => {
          console.log(data.points);
        }
      }]

    });

    await alert.present();

    // this.presentToast();
    console.log(member, helferPunkt)
  }

  async deleteHelferPunkt(slidingItem: IonItemSliding, member, helferPunkt) {
    await slidingItem.closeOpened();

    const alert = await this.alertController.create({
      header: 'Bestätigung',
      message: 'Sind Sie sicher, dass Sie diesen HelferPunkt löschen möchten?',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          handler: () => {
            console.log('Löschvorgang abgebrochen');
          }
        },
        {
          text: 'Löschen',
          handler: async () => {
            try {
              await this.helferService.deleteHelferPunkt(this.clubId, helferPunkt.id);
              this.presentToast();
            } catch (error) {
              console.error('Error deleting helferPunkt:', error);
            }
          }
        }
      ]
    });

    await alert.present();
  }

  onHelferPunkteMinChange(event: CustomEvent) {
    const value = Number(event.detail.value);
    console.log('Min range changed to:', value);
    this.pointsRange.next({ lower: value, upper: this.pointsRange.value.upper });
  }

  onHelferPunkteMaxChange(event: CustomEvent) {
    const value = Number(event.detail.value);
    console.log('Max range changed to:', value);
    this.pointsRange.next({ lower: this.pointsRange.value.lower, upper: value });
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

  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return clubAdminList && clubAdminList.some(club => club.id === clubId);
  }
  
  setFilter(role) {
    this.handleSearch({ detail: { value: role } });
  }
  
  edit() {
    this.allowEdit = !this.allowEdit;
  }

  async openHelferEvent(helferPunkt) {
    const modal = await this.modalCtrl.create({
      component: HelferDetailPage,
      presentingElement: await this.modalCtrl.getTop(),
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: {
          ...helferPunkt,
          clubId: helferPunkt.clubRef.id,
          id: helferPunkt.eventRef.id
        },
        isFuture: false,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
      // Refresh the list if confirmed
    }
  }
  
  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(null, "confirm");
  }

  async openHelferPunktCreateModal() {
    const members = await lastValueFrom(this.clubMembers$.pipe(take(1)));
    if (!members || members.length === 0) {
      const toast = await this.toastController.create({
        message: 'Keine Mitglieder gefunden',
        duration: 2000,
        color: 'warning'
      });
      await toast.present();
      return;
    }

    const memberOptions = members.map(member => ({
      label: `${member.profile.firstName} ${member.profile.lastName}`,
      type: 'radio' as const,
      value: member.profile.id
    }));

    // Erster Alert für Mitgliederauswahl
    const memberAlert = await this.alertController.create({
      header: 'Mitglied auswählen',
      inputs: memberOptions,
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel'
        },
        {
          text: 'Weiter',
          handler: async (memberId) => {
            if (!memberId) {
              const toast = await this.toastController.create({
                message: 'Bitte wählen Sie ein Mitglied aus',
                duration: 2000,
                color: 'warning'
              });
              await toast.present();
              return false;
            }

            // Zweiter Alert für Details
            const detailsAlert = await this.alertController.create({
              header: 'Helferpunkt Details',
              inputs: [
                {
                  name: 'description',
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
                  handler: () => {
                    this.openHelferPunktCreateModal();
                    return false;
                  }
                },
                {
                  text: 'Speichern',
                  handler: async (details) => {
                    if (!details.description || !details.date || !details.points) {
                      const toast = await this.toastController.create({
                        message: 'Bitte füllen Sie alle Felder aus',
                        duration: 2000,
                        color: 'warning'
                      });
                      await toast.present();
                      return false;
                    }

                    try {
                      const helferPunktRef = collection(this.firestore, `club/${this.clubId}/helferPunkte`);
                      await addDoc(helferPunktRef, {
                        userId: memberId,
                        description: details.description,
                        eventDate: Timestamp.fromDate(new Date(details.date)),
                        points: Number(details.points),
                        status: true
                      });

                      const toast = await this.toastController.create({
                        message: 'Helferpunkt erfolgreich erstellt',
                        duration: 2000,
                        color: 'success'
                      });
                      await toast.present();
                      
                      this.initializeClubMembers(this.clubId);
                      return true;
                    } catch (error) {
                      console.error('Error creating helferpunkt:', error);
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

            await detailsAlert.present();
            return true;
          }
        }
      ]
    });

    await memberAlert.present();
  }
}