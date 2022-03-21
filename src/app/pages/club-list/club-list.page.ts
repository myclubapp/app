import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Club, SwissUnihockeyClub, SwissVolleyClub } from 'src/app/models/club';
import { BackendService } from 'src/app/services/backend.service';

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
    private backend: BackendService,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    //this.getNews();
  }
  ngAfterViewInit(): void {
    this.getClubs();
  }

  
  async getClubs() {
    const loading = await this.loadingController.create({
      spinner: 'circles',
      // duration: 5000,
      message: 'Clubs',
      translucent: true,
      cssClass: 'custom-class custom-loading',

    });
    await loading.present();

  
    this.backend.getClubs().subscribe((result: any) => {
      this.suClubList = result?.data?.clubs as Club[];
      this.svClubList = result?.data?.clubs as Club[];

      if (result.loading == false){
        loading.dismiss();
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

    });
  }

}
