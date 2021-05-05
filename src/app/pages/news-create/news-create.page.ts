import { NewsService } from './../../services/news/news.service';
import { ToastController, ModalController } from '@ionic/angular';
import { TeamService } from './../../services/club/team.service';
import { TrainingService } from './../../services/training/training.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.page.html',
  styleUrls: ['./news-create.page.scss'],
})
export class NewsCreatePage implements OnInit {
  public news: any = {};
  public teamList: Array < any > ;
  public clubList: Array < any > ;
  constructor(
    private teamService: TeamService,
    private modalCtrl: ModalController,
    private newsService: NewsService,
    public toastController: ToastController
  ) { }

  async ngOnInit() {
    //Teams
    this.teamService.getTeamList().then(teams=>{
      this.teamList = teams;
      this.news.teamId = teams[0].id;
    });
    //clubs
    this.teamService.getClubList().then(clubs =>{
      this.clubList = clubs;
      this.news.clubId = clubs[0].id;
    });


  }

  checkBoxchangeTeam(event){

    console.log(event.detail.value);

    if (event.srcElement.name == "team"){
      for (let club of this.clubList){
        if (club && club.isChecked){
          club.isChecked = false;
        }
      }
    }

  }
    checkBoxchangeClub(event){

    console.log(event.detail.value);

     if (event.srcElement.name == "club"){
      for (let team of this.teamList){
        if (team && team.isChecked){
          team.isChecked = false;
        }
      }
    }

  }

  createNews(): void {
    if (
      this.news.title === undefined ||
      this.news.description === undefined
    ) {
      console.log(this.news);
      this.toastController.create({
        message: 'Fehler: Bitte alle Felder ausfüllen!',
        color: "danger",
        duration: 2000
      }).then(toast => {
        toast.present();
      });

      return;
    }

    this.newsService
      .createNews(this.news.title, this.news.description, this.news.clubId, this.news.teamId )
      .then(() => {

        this.toastController.create({
          message: 'Training erfolgreich erstellt',
          color: "success",
          duration: 2000
        }).then(toast => {
          toast.present();
          
          this.dismiss();
        });

      },error=>{
        this.toastController.create({
          message: 'Fehler',
          color: "danger",
          duration: 2000
        }).then(toast => {
          toast.present();
        });
      });
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }


}
