import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { News } from "src/app/models/news";
import { Share } from "@capacitor/share";

import {
  faTwitter,
  faFacebook,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCopy } from "@fortawesome/free-solid-svg-icons";
import { Observable, take, tap } from "rxjs";
import { NewsService } from "src/app/services/firebase/news.service";

@Component({
  selector: "app-news-detail",
  templateUrl: "./news-detail.page.html",
  styleUrls: ["./news-detail.page.scss"],
  standalone: false,
})
export class NewsDetailPage implements OnInit {
  @Input() data!: News;

  news: News;

  news$: Observable<News>;

  // Social Share
  shareSocialShareOptions: any;
  showSocialShare = false;

  faTwitter: any = faTwitter;
  faFacebook: any = faFacebook;
  faWhatsapp: any = faWhatsapp;
  faLinkedin: any = faLinkedin;
  faEnvelope: any = faEnvelope;
  faCopy: any = faCopy;

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly newsService: NewsService,
    // private readonly sanitization: DomSanitizer,
  ) {}

  ngOnInit() {
    // NavParams migration: now using @Input property directly
    this.news = this.data;

    // console.log(this.news);
    if (this.news && this.news.clubId) {
      this.news$ = this.getClubNewsDetail(this.news.clubId, this.news.id);
    } else {
      this.news$ = this.getNewsDetail(this.news.id);
    }
  }

  ngOnDestroy() {}

  getNewsDetail(newsId: string): Observable<News> {
    return this.newsService.getNewsDetail(newsId).pipe(
      take(1),
      tap((news) => {
        // console.log('News', news);
      }),
    );
  }

  getClubNewsDetail(clubId: string, newsId: string): Observable<News> {
    return this.newsService.getClubNewsDetail(clubId, newsId).pipe(
      take(1),
      tap((news) => {
        // console.log('News', news);
      }),
    );
  }
  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.news, "confirm");
  }

  async share(news: News) {
    // const device = await Device.getInfo();
    const { value } = await Share.canShare();
    if (value) {
      const shareRet = await Share.share({
        title: news.title,
        text: news.leadText,
        url: news.url,
        dialogTitle: news.title,
      }).catch((onrejected) => {});
    } else {
      await this.shareFallback(news);
    }
  }

  async shareFallback(news: News) {
    return await new Promise(async (resolve) => {
      // The configuration, set the share options
      this.shareSocialShareOptions = {
        displayNames: true,
        config: [
          {
            twitter: {
              socialShareUrl: "👉 " + news.title + ": " + news.url,
              socialSharePopupWidth: 300,
              socialSharePopupHeight: 400,
            },
          },
          {
            facebook: {
              socialShareUrl: "👉 " + news.title + ": " + news.url,
            },
          },
          {
            whatsapp: {
              socialShareUrl: "👉 " + news.title + ": " + news.url,
            },
          },
          {
            linkedin: {
              socialShareUrl: "👉 " + news.title + ": " + news.url,
            },
          },
          {
            email: {
              socialShareUrl: "👉 " + news.title + ": " + news.url,
            },
          },
          {
            copy: {
              socialShareUrl: "👉 " + news.title + ": " + news.url,
            },
          },
        ],
      };
      this.showSocialShare = true;
      resolve(true);
    });
  }
}
