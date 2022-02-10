import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { News } from 'src/app/models/news';
import { BackendService } from 'src/app/services/backend.service';
import { Browser } from '@capacitor/browser';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  newsList: News[]
  loading = true;
  constructor(
    private backend: BackendService,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.getNews();
  }

  async openNews(news: News){
    await Browser.open({ url: news.url, presentationStyle: 'popover', windowName: '_self' });
  }

  async openBrowser(url: string){
    await Browser.open({ url: url, presentationStyle: 'popover', windowName: '_self' });
  }

  async getNews() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Loading news...',
      translucent: true,
      cssClass: 'custom-class custom-loading',

    });
    await loading.present();

  
    this.backend.getNews().subscribe((result: any) => {
      this.newsList = result?.data?.news as News[];
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
