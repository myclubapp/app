import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Observable, catchError, combineLatest, defaultIfEmpty, forkJoin, map, of, switchMap, tap } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import { HelferService } from 'src/app/services/firebase/helfer.service';
import { UserProfileService } from 'src/app/services/firebase/user-profile.service';
import { HelferDetailPage } from '../helfer-detail/helfer-detail.page';
import { Club } from 'src/app/models/club';

@Component({
  selector: 'app-helfer-punkte-club',
  templateUrl: './helfer-punkte-club.page.html',
  styleUrls: ['./helfer-punkte-club.page.scss'],
})
export class HelferPunkteClubPage implements OnInit {
  @Input("clubId") clubId: any;
  clubAdminList$: Observable<Club[]>;
  allowEdit: boolean = false;

  helferPunkteList$: Observable<any[]>;
  groupArray = [];

  dateFrom: any;
  dateTo: any;

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly helferService: HelferService,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService,
  ) {
    const clubId =  this.navParams.get("clubId");
    this.helferPunkteList$ = this.getClubMembersWithHelferPunkte(clubId);
   
    // this.helferPunkteList$.subscribe();
  }

  ngOnInit() {

    this.dateFrom = new Date(Date.now() - 1000 * 60 * 60 * 24 * 365).toISOString() ;
    this.dateTo = new Date().toISOString();

    this.clubAdminList$ = this.fbService.getClubAdminList(); 
    const currentYear = new Date().getFullYear();

    this.groupArray.push(currentYear);
    this.groupArray.push(currentYear - 1);
    this.groupArray.push(currentYear - 2);
    this.groupArray.push(currentYear - 3);
  }
  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return clubAdminList && clubAdminList.some(club => club.id === clubId);
  }
  edit() {

    if (this.allowEdit) {
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }
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
                                    console.log("Profile not found for member ID:", member.id);
                                    return of({ profile: { ...member, firstName: "Unknown", lastName: "Unknown" }, helferPunkte: [], totalPoints: 0 });
                                }
                                return this.helferService.getUserHelferPunkteRefs(profile.id, clubId).pipe(
                                    map((helferPunkte) => ({
                                        profile,
                                        helferPunkte,
                                        totalPoints: helferPunkte.reduce((sum, item) => sum + Number(item.points), 0)  // Sum up points
                                    })),
                                    catchError((err) => {
                                        console.error("Error fetching HelferPunkte for member:", member.id, err);
                                        return of({ profile, helferPunkte: [], totalPoints: 0 });
                                    })
                                );
                            }),
                            catchError((err) => {
                                console.error("Error fetching profile for member:", member.id, err);
                                return of({ profile: { ...member, firstName: "Unknown", lastName: "Unknown" }, helferPunkte: [], totalPoints: 0 });
                            })
                        )
                    );
                    return combineLatest(memberDetailsWithHelferPunkte$);
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
}

async openHelferEvent(helferPunkt){
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
