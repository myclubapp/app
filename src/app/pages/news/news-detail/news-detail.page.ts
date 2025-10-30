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
import { Observable, shareReplay, take, tap } from "rxjs";
import { NewsService } from "src/app/services/firebase/news.service";
import { Club } from "src/app/models/club";
import { FirebaseService } from "src/app/services/firebase.service";
import { UiService } from "src/app/services/ui.service";
import { TranslateService } from "@ngx-translate/core";
import { lastValueFrom } from "rxjs";

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

  allowEdit: boolean = false;
  newsHasChanged: any = {};

  clubAdminList$!: Observable<Club[]>;

  // Social Share
  shareSocialShareOptions: any;
  showSocialShare = false;

  selectedFile: File | null = null;
  previewUrl: string | null = null;

  faTwitter: any = faTwitter;
  faFacebook: any = faFacebook;
  faWhatsapp: any = faWhatsapp;
  faLinkedin: any = faLinkedin;
  faEnvelope: any = faEnvelope;
  faCopy: any = faCopy;

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly newsService: NewsService,
    private readonly fbService: FirebaseService,
    private readonly uiService: UiService,
    private readonly translate: TranslateService,
    // private readonly sanitization: DomSanitizer,
  ) {}

  ngOnInit() {
    // NavParams migration: now using @Input property directly
    this.news = this.data;
    // console.log("News", this.news);
    this.clubAdminList$ = this.fbService
      .getClubAdminList()
      .pipe(shareReplay(5));
    // console.log(this.news);
    if (this.news && this.news.clubId) {
      this.news$ = this.getClubNewsDetail(this.news.clubId, this.news.id);
    } else {
      this.news$ = this.getNewsDetail(this.news.id);
    }
  }

  get isVereinSource(): boolean {
    // Falls die Detail-Abfrage kein source-Feld liefert, leiten wir es über clubId ab
    const inputSource = this.news?.source;
    const isClubScoped = !!this.news?.clubId;
    return inputSource === "verein" || isClubScoped;
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      this.previewUrl = null;
    }
  }

  ngOnDestroy() {}

  async edit() {
    if (this.allowEdit) {
      this.allowEdit = false;
      if (Object.keys(this.newsHasChanged).length > 0) {
        try {
          if (this.news && this.news.clubId) {
            await this.newsService.updateClubNews(
              this.news.clubId,
              this.news.id,
              this.newsHasChanged,
            );
            this.news$ = this.getClubNewsDetail(this.news.clubId, this.news.id);
          } else {
            await this.newsService.updateNews(
              this.news.id,
              this.newsHasChanged,
            );
            this.news$ = this.getNewsDetail(this.news.id);
          }
        } catch (e) {
          console.error(e);
        } finally {
          this.newsHasChanged = {};
        }
      }
      if (this.selectedFile && this.news?.clubId) {
        try {
          const url = await this.fbService.uploadClubNewsImage(
            this.news.clubId,
            this.news.id,
            this.selectedFile,
          );
          await this.newsService.updateClubNews(
            this.news.clubId,
            this.news.id,
            { image: url },
          );
          this.previewUrl = null;
          this.selectedFile = null;
          this.news$ = this.getClubNewsDetail(this.news.clubId, this.news.id);
        } catch (e) {
          console.error(e);
        }
      }
    } else {
      this.allowEdit = true;
    }
  }

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
  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return this.fbService.isClubAdmin(clubAdminList, clubId);
  }
  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.news, "confirm");
  }

  async updateNewsField(event: any, field: "title" | "leadText" | "text") {
    this.newsHasChanged[field] = event.detail?.hasOwnProperty("checked")
      ? event.detail.checked
      : event.detail?.value;
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

  async openAdminActions() {
    await this.uiService.showActionSheet({
      header: await lastValueFrom(this.translate.get("news.actions")),
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("news.delete_news")),
          icon: "trash",
          role: "destructive",
          handler: async () => {
            const confirmed = await this.uiService.showConfirmDialog({
              header: await lastValueFrom(
                this.translate.get("news.delete_news"),
              ),
              message: await lastValueFrom(
                this.translate.get("news.delete_news_confirm"),
              ),
              confirmText: await lastValueFrom(
                this.translate.get("common.confirm"),
              ),
              cancelText: await lastValueFrom(
                this.translate.get("common.cancel"),
              ),
            });
            if (!confirmed) return;
            try {
              if (this.news?.clubId) {
                await this.newsService.deleteClubNews(
                  this.news.clubId,
                  this.news.id,
                );
              } else {
                await this.newsService.deleteNews(this.news.id);
              }
              await this.uiService.showSuccessToast(
                await lastValueFrom(
                  this.translate.get("common.success__news_deleted"),
                ),
              );
              await this.modalCtrl.dismiss(null, "deleted");
            } catch (error) {
              await this.uiService.showErrorToast(
                await lastValueFrom(this.translate.get("common.error")),
              );
            }
          },
        },
        {
          text: await lastValueFrom(this.translate.get("common.cancel")),
          role: "cancel",
        },
      ],
    });
  }
}
