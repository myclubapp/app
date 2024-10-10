import { Component, Input, OnInit } from '@angular/core';
import { IonItemSliding, ModalController, NavParams } from '@ionic/angular';
import { BehaviorSubject, Observable, catchError, combineLatest, debounceTime, defaultIfEmpty, forkJoin, map, of, switchMap, tap } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import { HelferService } from 'src/app/services/firebase/helfer.service';
import { UserProfileService } from 'src/app/services/firebase/user-profile.service';
import { HelferDetailPage } from '../helfer-detail/helfer-detail.page';
import { Club } from 'src/app/models/club';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-helfer-punkte-club',
  templateUrl: './helfer-punkte-club.page.html',
  styleUrls: ['./helfer-punkte-club.page.scss'],
})
export class HelferPunkteClubPage implements OnInit {
  @Input("clubId") clubId: any;
  clubAdminList$: Observable<Club[]>;
  allowEdit: boolean = false;

  club$: Observable<Club | any>;
  helferPunkteList$: Observable<any[]>;
  filteredHelferPunkteList$: Observable<any[]>;

  groupArray = [];

  searchTerm = new BehaviorSubject<string>('');  // Initialized with an empty string

  minDate: string = "";
  maxDate: string = "";

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly helferService: HelferService,
    private readonly userProfileService: UserProfileService,
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

  initializeClubMembersWithHelferPunkte(clubId) {
    this.groupArray = [];  // Initialize or clear the group array

    this.helferPunkteList$ = this.fbService.getClubRef(clubId).pipe(
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
              this.groupArray = [];
              return of([]);
            }
            const memberDetailsWithHelferPunkte$ = members.map((member) =>
              this.userProfileService.getUserProfileById(member.id).pipe(
                switchMap((profile) => {
                  if (!profile) {
                    return of({ profile: { ...member, firstName: "Unknown", lastName: "Unknown", roles: member.roles || [] }, helferPunkte: [], totalPoints: 0 });
                  }
                  return this.helferService.getUserHelferPunkteRefsWithFilter(profile.id, clubId, Timestamp.fromDate(new Date(club.helferReportingDateFrom)), Timestamp.fromDate(new Date(club.helferReportingDateTo))).pipe(
                    map((helferPunkte) => ({
                      profile,
                      helferPunkte,
                      totalPoints: helferPunkte.reduce((sum, item) => sum + Number(item.points), 0),
                      groupBy: profile.firstName.charAt(0).toUpperCase(),
                      roles: member.roles || []
                    })),
                    catchError((err) => {
                      return of({ profile, helferPunkte: [], totalPoints: 0 });
                    })
                  );
                }),
                catchError((err) => {
                  return of({
                    profile: {
                      ...member, firstName: "Unknown", lastName: "Unknown",
                      roles: member.roles || [] // Ensure role or other attributes are included even in error
                    }, helferPunkte: [], totalPoints: 0
                  });
                })
              )
            );
            return combineLatest(memberDetailsWithHelferPunkte$);
          }),
          map(memberDetails => {
            // Integrate search filter here
            memberDetails.map(member => {
              console.log(member)
              const groupByChar = member.profile.firstName.charAt(0).toUpperCase();
              if (!this.groupArray.includes(groupByChar)) {
                this.groupArray.push(groupByChar);
              }
            });
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


    this.filteredHelferPunkteList$ = combineLatest([this.helferPunkteList$, this.searchTerm]).pipe(
      debounceTime(300),
      map(([members, term]) => {
        if (!term) return members;

        const filtered = members.filter(member =>
          member.profile.firstName.toLowerCase().includes(term.toLowerCase()) ||
          member.profile.lastName.toLowerCase().includes(term.toLowerCase()) ||
          member.roles.find(role => role.toLowerCase().includes(term.toLowerCase()))
        );
        return filtered;
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

  changeHelferPunkt(slidingItem: IonItemSliding, member, helferPunkt) {
    slidingItem.closeOpened();

    console.log(member, helferPunkt)
  }

  deleteHelferPunkt(slidingItem: IonItemSliding, member, helferPunkt) {
    slidingItem.closeOpened();

    console.log(member, helferPunkt)
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
