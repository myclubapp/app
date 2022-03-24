import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Club, SwissHandballClub, SwissUnihockeyClub, SwissVolleyClub, SwissTurnverbandClub } from 'src/app/models/club';
import { SwisshandballService } from 'src/app/services/backend/swisshandball.service';
import { SwissunihockeyService } from 'src/app/services/backend/swissunihockey.service';
import { SwissvolleyService } from 'src/app/services/backend/swissvolley.service';
import { SwissturnverbandService } from 'src/app/services/backend/swissturnverband.service';


@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.page.html',
  styleUrls: ['./club-list.page.scss'],
})
export class ClubListPage implements OnInit {
  suClubList: SwissUnihockeyClub[];
  svClubList: SwissVolleyClub[];
  shClubList: SwissHandballClub[];
  stClubList: SwissTurnverbandClub[];
  loading = true;
  constructor(
    private swissunihockey: SwissunihockeyService,
    private swissvolley: SwissvolleyService,
    private swisshandball: SwisshandballService,
    private swissturnverband: SwissturnverbandService,

    public loadingController: LoadingController,
    public toastController: ToastController
  ) { 
    this.suClubList = [];
    this.svClubList = [];
    this.shClubList = [];
    this.stClubList = [];
  }

  ngOnInit() {
  
  }
  ngAfterViewInit(): void {
    this.getUnihockeyClubs();
    this.getVolleyballClubs();
    this.getHandballClubs();
    this.getTurnvereine();
  }

  async getUnihockeyClubs() {
   /* const loading = await this.loadingController.create({
      spinner: 'circles',
      // duration: 5000,
      message: 'Clubs',
      translucent: true,
      cssClass: 'custom-class custom-loading',

    });
    await loading.present();
*/
  
    this.swissunihockey.getClubs().subscribe((result: any) => {
      this.suClubList = result?.data?.clubs as Club[];
  
      if (result.loading == false){
       // loading.dismiss();
      }
      
      // console.log(result);
      
      if (result.errors){
        this.toastController.create({
          message: JSON.stringify(result.errors[0].message),
          duration: 2000
        }).then(toast=>{
          toast.present();
        });
        
      }
      this.loading = result.loading;

    },(error:any)=>{
      this.toastController.create({
        message: JSON.stringify(error.message),
        duration: 2000
      }).then(toast=>{
        toast.present();
      });

    });
  }

  async getVolleyballClubs() {
  
     this.swissvolley.getClubs().subscribe((result: any) => {
      for (let association of result?.data?.associations){
        for (let club of association.clubs){
          this.svClubList.push(club);
        }
      }
             
       if (result.errors){
         this.toastController.create({
           message: JSON.stringify(result.errors[0].message),
           duration: 2000
         }).then(toast=>{
           toast.present();
         });
         
       }
       this.loading = result.loading;
 
     },(error:any)=>{
       this.toastController.create({
         message: JSON.stringify(error.message),
         duration: 2000
       }).then(toast=>{
         toast.present();
       });
 
     });
   }
   
  async getHandballClubs() {
  
     this.swisshandball.getClubs().subscribe((result: any) => {

      this.shClubList = result?.data?.clubs as Club[];
     
       if (result.errors){
         this.toastController.create({
           message: JSON.stringify(result.errors[0].message),
           duration: 2000
         }).then(toast=>{
           toast.present();
         });
         
       }
       this.loading = result.loading;
 
     },(error:any)=>{
       this.toastController.create({
         message: JSON.stringify(error.message),
         duration: 2000
       }).then(toast=>{
         toast.present();
       });
 
     });
   }

   async getTurnvereine() {
  
    this.swissturnverband.getClubs().subscribe((result: any) => {

     this.stClubList = result?.data?.clubs as Club[];
    
      if (result.errors){
        this.toastController.create({
          message: JSON.stringify(result.errors[0].message),
          duration: 2000
        }).then(toast=>{
          toast.present();
        });
        
      }
      this.loading = result.loading;

    },(error:any)=>{
      this.toastController.create({
        message: JSON.stringify(error.message),
        duration: 2000
      }).then(toast=>{
        toast.present();
      });

    });
  }   
}
