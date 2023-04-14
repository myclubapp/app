import { Component, Input, OnInit } from "@angular/core";
import { AlertController, ModalController, NavParams, ToastController } from "@ionic/angular";
import { combineLatest, of, Subscription } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Club } from "src/app/models/club";
import { Team } from "src/app/models/team";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";

@Component({
  selector: "app-club",
  templateUrl: "./club.page.html",
  styleUrls: ["./club.page.scss"],
})
export class ClubPage implements OnInit {
  @Input("data") club: Club;

  memberList: any[] = [];
  adminList: any[] = [];
  requestList: any[] = [];

  teamList: Team[] = [];
  availableTeamList: Team[] = [];

  clubAdminSub: Subscription;
  clubMemberSub: Subscription;
  clubRequestSub: Subscription;
  clubTeamListSub: Subscription;

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly alertController: AlertController,
    private readonly toastController: ToastController,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService
  ) {}

  ngOnInit() {
    this.club = this.navParams.get("data");

    this.getClubMembers();
    this.getClubAdmins();
    this.getClubRequests();
    this.getAvailableTeamList();
  }

  ngOnDestroy() {
    this.clubAdminSub.unsubscribe();
    this.clubMemberSub.unsubscribe();
    this.clubRequestSub.unsubscribe();
    this.clubTeamListSub.unsubscribe();
  }

  getClubMembers() {
    this.clubMemberSub = this.fbService
      .getClubMemberRefs(this.club.id)
      .pipe(
        switchMap((allClubMembers: any) =>
          combineLatest(
            allClubMembers.map((member) =>
              combineLatest(
                of(member),
                this.userProfileService.getUserProfileById(member.id)
              )
            )
          )
        )
      )
      .subscribe((data:any) => {
        this.memberList = [];
        for (const member of data) {
          this.memberList.push(member[1]);
        }
      });
  }
  getClubAdmins() {
   this.clubAdminSub = this.fbService
      .getClubAdminRefs(this.club.id)
      .pipe(
        switchMap((allClubMembers: any) =>
          combineLatest(
            allClubMembers.map((member) =>
              combineLatest(
                of(member),
                this.userProfileService.getUserProfileById(member.id)
              )
            )
          )
        )
      )
      .subscribe((data:any) => {
        this.adminList = [];
        for (const member of data) {
          this.adminList.push(member[1]);
        }
      });
  }

  getClubRequests() {
    this.requestList = [];
    this.clubRequestSub =  this.fbService
      .getClubRequestRefs(this.club.id)
      .pipe(
        switchMap((allClubMembers: any) =>
          combineLatest(
            allClubMembers.map((member) =>
              this.userProfileService.getUserProfileById(member.id)
            )
          )
        )
      )
      .subscribe((data:any) => {
        console.log(data);
        this.requestList = [];
        for (const member of data) {
          this.requestList.push(member);
        }
      });
  }

  async deleteClubRequest(request) {
    await this.fbService.deleteUserClubRequest(this.club.id, request.id);
    await this.toastActionSaved();
    this.getClubRequests();
  }
  async approveClubRequest(request) {
    await this.fbService.setApproveUserClubRequest(this.club.id, request.id);
    await this.toastActionSaved();
    await this.joinTeamAlert();
    this.getClubRequests();
  }

  async toastActionSaved() {
    const toast = await this.toastController.create({
      message: "Änderungen erfolgreich gespeichert",
      duration: 1500,
      position: "bottom",
      color: "success",
    });

    await toast.present();
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.club, "confirm");
  }


  async joinTeamAlert() {
    let _inputs = [];

    if (this.teamList.length > 0) {
      for (let team of this.availableTeamList) {
            _inputs.push({
              label: team.liga + " " + team.name,
              type: "radio",
              value: team.id,
            });
      }
    } else {
      for (let team of this.availableTeamList) {
        _inputs.push({
          label: team.liga + " " + team.name,
          type: "radio",
          value: team.id,
        });
      }
    }
    _inputs = _inputs.sort((a, b) => Number(a.id) - Number(b.id));
    _inputs = [...new Set(_inputs)];

    const alert = await this.alertController.create({
      header: "Wähle dein Team aus:",
      buttons: [
        {
          text: "auswählen",
          role: "confirm",
          handler: async (data:any) => {
            // console.log(data);
            this.fbService.setTeamRequest(data);
            const toast = await this.toastController.create({
              message: "Anfrage an Team gesendet",
              color: "primary",
              duration: 1500,
              position: "bottom",
            });

            await toast.present();
          },
        },
        {
          text: "abbrechen",
          role: "cancel",
          handler: () => {
            console.log("abbrechen");
          },
        },
      ],
      inputs: _inputs,
    });

    await alert.present();
  }



  getAvailableTeamList() {
    // console.log("getAvailableTeamList");
    this.clubTeamListSub = this.fbService
                  .getClubTeamRefs(this.club.id)
                  .pipe(
                    switchMap((allTeams: any) =>
                      combineLatest(
                        allTeams.map((team) =>
                          combineLatest(
                            of(team),
                            this.fbService.getTeamRef(team.id)
                          )
                        )
                      )
                    )
                  ).subscribe
             (async (data: any) => {
        let availableTeamListNew = [];
        this.availableTeamList = [];

        for (const team of data[0][1]) {
          // loop over teams
          const teamDetail = team[1];
          console.log(teamDetail.id);
          availableTeamListNew.push(teamDetail);
        }
        availableTeamListNew = availableTeamListNew.sort(
          (a, b) => Number(a.id) - Number(b.id)
        );

        this.availableTeamList = [...new Set(availableTeamListNew.concat(...this.availableTeamList))];
      });
  }

}
