import {
  AuthService
} from 'src/app/services/auth.service';
import {
  AlertController, ToastController
} from '@ionic/angular';
import {
  TeamService
} from './../../services/club/team.service';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-club',
  templateUrl: './club.page.html',
  styleUrls: ['./club.page.scss'],
})
export class ClubPage implements OnInit {
  clubId: any = {};
  club: any = {};
  memberList = [];
  adminList = [];
  public showButton: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private alertController: AlertController,
    private authService: AuthService,
    private toastController: ToastController
  ) {}

  async ngOnInit() {


    let clubId = this.route.snapshot.paramMap.get('id');
    this.clubId = clubId;
    this.club = await this.teamService.getClub(clubId);

    this.authService.checkUserhasClubAdminForId(clubId).then(status => {
      //console.log(status);
      this.showButton = status;
    })

    //CLUB ADMIN LIST
    let clubAdminRef = this.teamService.getClubAdminList(clubId);
    clubAdminRef.onSnapshot(async snapshot => {

      let adminMembers = snapshot.docChanges();
      for (let adminMember of adminMembers) {

        console.log(adminMember.doc.data());

        let member = await adminMember.doc.data().memberRef.get();

        if (adminMember.type == 'added') {

          this.adminList.push({
            ...adminMember.doc.data(),
            ...{
              "id": adminMember.doc.id
            },
            ...member.data()
          });
        } else {
          this.adminList.find((element, index) => {

            if (element) {
              if (element.id === adminMember.doc.id) {
                this.adminList.splice(index, 1);
                return;
              }
            }
          })
        }
      }
    })


    // club MEMBER LIST
    let clubMemberRef = this.teamService.getClubMemberList(clubId);
    clubMemberRef.onSnapshot(async snapshot => {

      let clubMembers = snapshot.docChanges();
      for (let clubMember of clubMembers) {

        console.log(clubMember.doc.data());

        let member = await clubMember.doc.data().memberRef.get();

        if (clubMember.type == 'added') {

          this.memberList.push({
            ...clubMember.doc.data(),
            ...{
              "id": clubMember.doc.id
            },
            ...member.data()
          });
        } else {
          this.memberList.find((element, index) => {

            if (element) {
              if (element.id === clubMember.doc.id) {
                this.memberList.splice(index, 1);
                return;
              }
            }
          })
        }
      }
    })




  }

  async addAdminToClub() {

    let inputs = [];
    for (let member of this.memberList) {
      inputs.push({
        name: member.id,
        type: 'radio',
        label: member.firstName + " " + member.lastName,
        value: member
      })
    }

    const alert = await this.alertController.create({
      //  cssClass: 'my-custom-class',
      header: 'Administrator hinzufügen',
      inputs: inputs,
      buttons: [{
        text: 'Abbrechen',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
          this.toastController.create({
            message: 'Aktion abgebrochen',
            color: "danger",
            duration: 2000
          }).then(toast => {
            toast.present();
          });
        }
      }, {
        text: 'Hinzufügen',
        handler: (member) => {
          this.teamService.addAdminToClub(this.clubId, member.id).then(ok=>{
            console.log(ok);
            this.toastController.create({
              message: 'Administrator hinzugefügt',
              color: "success",
              duration: 2000
            }).then(toast => {
              toast.present();
            });
          }, error=>{
            console.log(error);
            this.toastController.create({
              message: 'Fehler',
              color: "danger",
              duration: 2000
            }).then(toast => {
              toast.present();
            });
          })
        }
      }]
    });
    await alert.present();


  }


  removeAdminFromClub(userId) {

    this.teamService.removeAdminFromClub(this.clubId, userId).then(ok => {
      this.toastController.create({
        message: 'Administrator erfolgreich entfernt',
        color: "danger",
        duration: 2000
      }).then(toast => {
        toast.present();
      });
    }, error => {
      this.toastController.create({
        message: 'Fehler',
        color: "danger",
        duration: 2000
      }).then(toast => {
        toast.present();
      });
    })

  }
  removeMemberFromClub(userId) {

    this.teamService.removeMemberFromClub(this.clubId, userId).then(ok => {
      this.toastController.create({
        message: 'Mitglied erfolgreich entfernt',
        color: "danger",
        duration: 2000
      }).then(toast => {
        toast.present();
      });
    }, error => {
      this.toastController.create({
        message: 'Fehler',
        color: "danger",
        duration: 2000
      }).then(toast => {
        toast.present();
      });
    })

  }


  saveClub(){
    this.teamService.saveClub(this.club).then(done=>{
      this.toastController.create({
        message: 'Änderungen gespeichert',
        color: "success",
        duration: 2000
      }).then(toast => {
        toast.present();
      });
    },error=>{
      this.toastController.create({
        message: 'Fehler',
        color: "danger",
        duration: 2000
      }).then(toast => {
        toast.present();
      });
    })


  }

}