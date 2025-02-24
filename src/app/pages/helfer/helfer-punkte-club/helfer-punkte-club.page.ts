import { Component, Input, OnInit } from '@angular/core';
import { AlertController, IonItemSliding, ModalController, NavParams, RangeCustomEvent, ToastController, ToggleChangeEventDetail, ToggleCustomEvent } from '@ionic/angular';
import { BehaviorSubject, Observable, catchError, combineLatest, debounceTime, defaultIfEmpty, forkJoin, lastValueFrom, map, of, switchMap, take, tap } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import { HelferService } from 'src/app/services/firebase/helfer.service';
import { UserProfileService } from 'src/app/services/firebase/user-profile.service';
import { HelferDetailPage } from '../helfer-detail/helfer-detail.page';
import { Club } from 'src/app/models/club';
import { Timestamp } from 'firebase/firestore';
import { TranslateService } from '@ngx-translate/core';
import { EventService } from 'src/app/services/firebase/event.service';
import { HelferEvent } from 'src/app/models/event';

interface PlannedEventsData {
  events: HelferEvent[];
  shifts?: {
    eventId: string;
    shiftId: string;
    shift: any;
    event: HelferEvent;
    attendees: any[];
  }[];
}

@Component({
    selector: 'app-helfer-punkte-club',
    templateUrl: './helfer-punkte-club.page.html',
    styleUrls: ['./helfer-punkte-club.page.scss'],
    standalone: false
})
export class HelferPunkteClubPage implements OnInit {
  @Input("clubId") clubId: any;
  clubAdminList$: Observable<Club[]>;
  allowEdit: boolean = false;

  club$: Observable<Club | any>;
  helferPunkteList$: Observable<any[]>;
  filteredHelferPunkteList$: Observable<any[]>;

  groupArray = [];

  plannedToggle = new BehaviorSubject<boolean>(false);  // Initialized with an empty string

  searchTerm = new BehaviorSubject<string>('');  // Initialized with an empty string

  pointsRange = new BehaviorSubject<{ lower: number, upper: number }>({ lower: 0, upper: 10 }); // Default range

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
  ) {

  }

  ngOnInit() {

    let dateFrom = new Date();
    dateFrom.setFullYear(new Date().getFullYear() - 2);
    this.minDate = dateFrom.toISOString();

    let dateTo = new Date();
    dateTo.setFullYear(new Date().getFullYear() + 2);
    this.maxDate = dateTo.toISOString();

    this.club$ = this.fbService.getClubRef(this.clubId);

    this.initializeClubMembersWithHelferPunkte(this.clubId);

    this.clubAdminList$ = this.fbService.getClubAdminList();

    const currentYear = new Date().getFullYear();
    this.groupArray.push(currentYear);
    this.groupArray.push(currentYear - 1);
    this.groupArray.push(currentYear - 2);
    this.groupArray.push(currentYear - 3);
  }

  handleSearch(event: any) {
    const searchTerm = event.detail.value || '';
    console.log('Handling Search Event:', searchTerm);
    this.searchTerm.next(searchTerm.trim()); // Trim and update the search term
  }

  private processShift(clubId: string, eventId: string, shift: any) {
    console.log(`Loading attendees for shift ${shift.id} of event ${eventId}`);
    return this.eventService.getClubHelferEventSchichtAttendeesRef(
      clubId,
      eventId,
      shift.id
    ).pipe(
      tap(attendees => {
        console.log(`Raw attendees for shift ${shift.id}:`, attendees);
        const confirmed = attendees.filter(a => a.status === true);
        console.log(`Confirmed attendees for shift ${shift.id}:`, confirmed);
      }),
      map(attendees => ({
        eventId,
        shiftId: shift.id,
        shift,
        event: this.currentEvent, // wird später gesetzt
        attendees: attendees.filter(a => a.status === true)
      })),
      // Fehlerbehandlung für einzelne Shifts
      catchError(error => {
        console.error(`Error loading attendees for shift ${shift.id}:`, error);
        return of({
          eventId,
          shiftId: shift.id,
          shift,
          event: this.currentEvent,
          attendees: []
        });
      })
    );
  }

  private currentEvent: any; // Hilfsvariable für Event-Kontext

  initializeClubMembersWithHelferPunkte(clubId) {
    this.groupArray = [];

    this.helferPunkteList$ = this.fbService.getClubRef(clubId).pipe(
      switchMap((club) => {
        if (!club) return of(null);

        return combineLatest([
          this.fbService.getClubMemberRefs(clubId),
          this.plannedToggle.pipe(
            switchMap(showPlanned => {
              if (!showPlanned) {
                console.log('Planned toggle is false, returning empty data');
                return of({ events: [], shifts: [] });
              }

              const dateFrom = Timestamp.fromDate(new Date(club.helferReportingDateFrom));
              const dateTo = Timestamp.fromDate(new Date(club.helferReportingDateTo));

              return this.eventService.getClubHelferEventRefsByDate(clubId, dateFrom, dateTo).pipe(
                switchMap(events => {
                  if (!events.length) return of({ events, shifts: [] });

                  const processedEvents$ = events.map(event => {
                    this.currentEvent = event; // Event-Kontext setzen
                    return this.eventService.getClubHelferEventSchichtenRef(clubId, event.id).pipe(
                      switchMap(shifts => {
                        if (!shifts.length) return of([]);
                        
                        // Verarbeite alle Shifts eines Events parallel
                        const shiftPromises = shifts.map(shift => 
                          this.processShift(clubId, event.id, shift)
                        );
                        
                        return forkJoin(shiftPromises).pipe(
                          catchError(error => {
                            console.error(`Error processing shifts for event ${event.id}:`, error);
                            return of([]);
                          })
                        );
                      })
                    );
                  });

                  // Verarbeite alle Events parallel
                  return forkJoin(processedEvents$).pipe(
                    map(results => ({
                      events,
                      shifts: results.flat()
                    })),
                    tap(result => {
                      console.log('Final processed data:', result);
                    })
                  );
                })
              );
            })
          )
        ]).pipe(
          // Rest des Codes bleibt gleich...
          switchMap(([members, plannedEvents]) => {
            if (!members.length) {
              this.groupArray = [];
              return of([]);
            }

            const memberDetailsWithHelferPunkte$ = members.map(member =>
              this.userProfileService.getUserProfileById(member.id).pipe(
                switchMap(profile => {
                  if (!profile) {
                    return of({
                      profile: { ...member, firstName: "Unknown", lastName: "Unknown", roles: member.roles || [] },
                      helferPunkte: [],
                      plannedHelfer: [],
                      totalPoints: 0
                    });
                  }

                  return this.helferService.getUserHelferPunkteRefsWithFilter(
                    profile.id,
                    clubId,
                    Timestamp.fromDate(new Date(club.helferReportingDateFrom)),
                    Timestamp.fromDate(new Date(club.helferReportingDateTo))
                  ).pipe(
                    map(helferPunkte => {
                      const plannedHelfer = (plannedEvents.shifts || [])
                        .filter(shift => {
                          console.log(`Checking shift ${shift.shiftId} attendees for ${profile.id}:`, shift.attendees);
                          return shift.attendees.some(attendee => attendee.id === profile.id);
                        })
                        .map(shift => ({
                          event: shift.event,
                          schicht: shift.shift
                        }));

                      console.log(`Planned helpers for ${profile.firstName}:`, plannedHelfer);

                      return {
                        profile,
                        helferPunkte,
                        plannedHelfer,
                        totalPoints: helferPunkte.reduce((sum, item) => sum + Number(item.points), 0) +
                          plannedHelfer.reduce((sum, item) => sum + Number(item.schicht.points), 0),
                        groupBy: profile.firstName.charAt(0).toUpperCase(),
                        roles: member.roles || []
                      };
                    })
                  );
                })
              )
            );

            return combineLatest(memberDetailsWithHelferPunkte$);
          }),
          map(memberDetails => {
            this.groupArray = [...new Set(memberDetails.map(
              member => member.profile.firstName.charAt(0).toUpperCase()
            ))].sort();
            
            return memberDetails.sort((a, b) => 
              a.profile.firstName.localeCompare(b.profile.firstName)
            );
          })
        );
      })
    );

  
    this.filteredHelferPunkteList$ = combineLatest([this.helferPunkteList$, this.searchTerm, this.pointsRange]).pipe(
      debounceTime(300),
      map(([members, term, range]) => {
        // Filter based on search term and point range
        return members.filter(member => {
          const matchesSearch = term
            ? member.profile.firstName.toLowerCase().includes(term.toLowerCase()) ||
              member.profile.lastName.toLowerCase().includes(term.toLowerCase()) ||
              member.roles.find(role => role.toLowerCase().includes(term.toLowerCase()))
            : true;  // If no search term, match all
  
          const withinRange = member.totalPoints >= range.lower && member.totalPoints <= range.upper;
  
          // Return true if both conditions are met
          return matchesSearch && withinRange;
        });
      }),
      map(filtered => {
        // Update the groupArray
        this.groupArray = [];
        filtered.forEach(member => {
          const groupByChar = member.profile.firstName.charAt(0).toUpperCase();
          if (!this.groupArray.includes(groupByChar)) {
            this.groupArray.push(groupByChar);
          }
        });
        return filtered;
      }),
      tap(filtered => console.log("Filtered members:", filtered.length)),
      catchError(err => {
        console.error("Error filtering members:", err);
        return of([]);
      })
    );
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
            await this.helferService.deleteHelferPunkt(this.clubId, helferPunkt.id);
            this.presentToast();
            console.log(member, helferPunkt);
          }
        }
      ]
    });

    await alert.present();
  }

  getPlannedHelfer(memberId: string, clubId: string, dateFrom, dateTo): Observable<any[]> {
    // Step 1: Fetch all Helfer events
    return this.eventService.getClubHelferEventRefsByDate(clubId, dateFrom, dateTo).pipe(
      switchMap(events => {
        // Step 2: For each event, fetch the list of schichten (shifts)
        const schichtenObservables = events.map(event =>
          this.eventService.getClubHelferEventSchichtenRef(clubId, event.id).pipe(
            // Step 3: For each schicht, fetch the attendees and filter based on the memberId and status
            switchMap(schichten => {
              const attendeesObservables = schichten.map(schicht =>
                this.eventService.getClubHelferEventSchichtAttendeesRef(clubId, event.id, schicht.id).pipe(
                  map(attendees => {
                    // Step 4: Find the attendees with the specified memberId and status set to true
                    const isConfirmed = attendees.some(attendee => attendee.id === memberId && attendee.status === true);
                    return isConfirmed ? { event, schicht } : null;  // Return the event and schicht if confirmed
                  }),
                  catchError(err => {
                    console.error("Error fetching schicht attendees:", err);
                    return of(null);
                  })
                )
              );
              return combineLatest(attendeesObservables).pipe(
                map(results => results.filter(result => result !== null)) // Filter out null values
              );
            })
          )
        );

        return combineLatest(schichtenObservables).pipe(
          map(results => results.flat()),  // Flatten the array of results
          catchError(err => {
            console.error("Error fetching schichten:", err);
            return of([]);
          })
        );
      }),
      catchError(err => {
        console.error("Error fetching events:", err);
        return of([]);
      })
    );
  }

  /*onHelferPunkteChange(event: CustomEvent) {

    const range = (event as RangeCustomEvent).detail.value as any;
    console.log('Range slider value:', range);
    this.pointsRange.next({ lower: range.lower, upper: range.upper });



  pinFormatter(value: number) {
    console.log(value);
    return `${value} Punkte`;
  }

  }*/


  onHelferPunkteMinChange(event: CustomEvent) {
    this.pointsRange.next({ lower: event.detail.value, upper: this.pointsRange.value.upper });
  }


  onHelferPunkteMaxChange(event: CustomEvent) {
    this.pointsRange.next({ lower: this.pointsRange.value.lower, upper: event.detail.value });
  }

  onHelferPunktePlanned(event: CustomEvent<ToggleChangeEventDetail>) {
    console.log('Toggle changed:', event.detail['checked']);
    this.plannedToggle.next(event.detail['checked']);
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
  /*
    getClubMembersWithHelferPunkte(clubId: string) {
      return this.fbService.getClubRef(clubId).pipe(
        tap(club => console.log("Fetched club:", club)),
        switchMap((club) => {
          if (!club) {
            console.log("No club found for ID:", clubId);
            return of(null);
          }
          return this.fbService.getClubMemberRefs(clubId).pipe(
            tap(members => console.log("Fetched members:", members)),
            switchMap((members) => {
              if (!members.length) {
                console.log("No members found in club:", clubId);
                return of([]);
              }
              const memberDetailsWithHelferPunkte$ = members.map((member) =>
                this.userProfileService.getUserProfileById(member.id).pipe(
                  switchMap((profile) => {
                    if (!profile) {
                      return of({ profile: { ...member, firstName: "Unknown", lastName: "Unknown" }, helferPunkte: [], totalPoints: 0 });
                    }
                    return this.helferService.getUserHelferPunkteRefs(profile.id, clubId).pipe(
                      map((helferPunkte) => ({
                        profile,
                        helferPunkte,
                        totalPoints: helferPunkte.reduce((sum, item) => sum + Number(item.points), 0)
                      })),
                      catchError((err) => {
                        return of({ profile, helferPunkte: [], totalPoints: 0 });
                      })
                    );
                  }),
                  catchError((err) => {
                    return of({ profile: { ...member, firstName: "Unknown", lastName: "Unknown" }, helferPunkte: [], totalPoints: 0 });
                  })
                )
              );
              return combineLatest(memberDetailsWithHelferPunkte$);
            }),
            map(memberDetails => {
              // Integrate search filter here
              return memberDetails.sort((a, b) => a.profile.firstName.localeCompare(b.profile.firstName));
            }),
            catchError((err) => {
              console.error("Error fetching members for club:", clubId, err);
              return of([]);
            })
          );
        }),
        catchError((err) => {
          console.error("Error fetching club with ID:", clubId, err);
          return of([]);
        })
      );
    }*/

  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return clubAdminList && clubAdminList.some(club => club.id === clubId);
  }
  setFilter(role) {
    this.handleSearch({ detail: { value: role } })
  }
  edit() {

    if (this.allowEdit) {
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }

  async changeDate(event, fieldname) {
    await this.fbService.setClubHelferReportingDate(this.clubId, fieldname, event.detail.value)

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
    }

  }


  
  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(null, "confirm");
  }
}
