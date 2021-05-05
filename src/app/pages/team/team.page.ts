import { AuthService } from 'src/app/services/auth.service';
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
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {
  team: any = {};
  teamId: any = {};
  memberList = [];
  adminList = [];
  public showButton: boolean = false;
  constructor(
    private alertController: AlertController,
    private route: ActivatedRoute,
    private teamService: TeamService,
    private authService: AuthService,
    private toastController: ToastController
  ) {



    
  }

  async ngOnInit() {

    
    let teamId = this.route.snapshot.paramMap.get('id');
    this.teamId = teamId;
    this.team = await this.teamService.getTeam(teamId);
    console.log(this.team);

    this.authService.checkUserhasTeamAdminForId(teamId).then(status=>{
      //console.log(status);
      this.showButton = status;
    })

    //TEAM ADMIN LIST
    let teamAdminRef = this.teamService.getTeamAdminList(teamId);
    teamAdminRef.onSnapshot(async snapshot => {

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


    // TEAM MEMBER LIST
    let teamMemberRef = this.teamService.getTeamMemberList(teamId);
    teamMemberRef.onSnapshot(async snapshot => {

      let teamMembers = snapshot.docChanges();
      for (let teamMember of teamMembers) {

        console.log(teamMember.doc.data());

        let member = await teamMember.doc.data().memberRef.get();

        if (teamMember.type == 'added') {

          this.memberList.push({
            ...teamMember.doc.data(),
            ...{
              "id": teamMember.doc.id
            },
            ...member.data()
          });
        } else {
          this.memberList.find((element, index) => {

            if (element) {
              if (element.id === teamMember.doc.id) {
                this.memberList.splice(index, 1);
                return;
              }
            }
          })
        }
      }
    })
  }

  async addAdminToTeam() {

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
          this.teamService.addAdminToTeam(this.teamId, member.id).then(ok=>{
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

  removeAdminFromTeam(userId){

    this.teamService.removeAdminFromTeam(this.teamId, userId).then(ok=>{
      this.toastController.create({
        message: 'Administrator erfolgreich entfernt',
        color: "danger",
        duration: 2000
      }).then(toast => {
        toast.present();
      });
    },error=>{
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
    removeMemberFromTeam(userId){

    this.teamService.removeMemberFromTeam(this.teamId, userId).then(ok=>{
      console.log(ok);
      this.toastController.create({
        message: 'Mitglied erfolgreich entfernt',
        color: "danger",
        duration: 2000
      }).then(toast => {
        toast.present();
      });
    },error=>{
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

  saveTeam(){
    this.teamService.saveTeam(this.team).then(done=>{
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