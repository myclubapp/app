import { Component } from '@angular/core';
import { Club } from 'src/app/models/club';
import { BackendService } from 'src/app/services/backend.service';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  clubs: Club[]
  loading = true;

  constructor(
    private backend: BackendService,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) {
    this.getClubs();
  }
  async getClubs() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Loading clubs...',
      translucent: true,
      cssClass: 'custom-class custom-loading',

    });
    await loading.present();

  
    this.backend.getClubs().subscribe((result: any) => {
      this.clubs = result?.data?.clubs as Club[];
      if (result.loading == false){
        loading.dismiss();
      }
      
      if ( result.error){
        this.toastController.create({
          message: JSON.stringify(result.error),
          duration: 2000
        }).then(toast=>{
          toast.present();
        });
        
      }
      this.loading = result.loading;

    });
  }

}
