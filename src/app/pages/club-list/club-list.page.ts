import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Club, SwissUnihockeyClub, SwissVolleyClub } from 'src/app/models/club';
import { SwissunihockeyService } from 'src/app/services/backend/swissunihockey.service';
import { SwissvolleyService } from 'src/app/services/backend/swissvolley.service';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.page.html',
  styleUrls: ['./club-list.page.scss'],
})
export class ClubListPage implements OnInit {
  suClubList: SwissUnihockeyClub[];
  svClubList: SwissVolleyClub[];
  loading = true;
  constructor(
    private swissunihockey: SwissunihockeyService,
    private swissvolley: SwissvolleyService,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  
  }
  ngAfterViewInit(): void {
    this.getUnihockeyClubs();
    this.getVolleyballClubs();
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
    /* const loading = await this.loadingController.create({
       spinner: 'circles',
       // duration: 5000,
       message: 'Clubs',
       translucent: true,
       cssClass: 'custom-class custom-loading',
 
     });
     await loading.present();
 */
   
     this.swissvolley.getClubs().subscribe((result: any) => {

      this.svClubList = [];

      for (let association of result?.data?.associations){
        for (let club of association.clubs){
          this.svClubList.push(club);
        }

      }

      // this.svClubList = result?.data?.associations;
   
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
}
