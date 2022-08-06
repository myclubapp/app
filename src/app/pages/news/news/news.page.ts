import { Component, OnInit } from '@angular/core';
import {
  IonRouterOutlet,
  LoadingController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { User } from 'firebase/auth';

import { Observable, forkJoin, combineLatest } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';

import { Share } from '@capacitor/share';
import { Device } from '@capacitor/device';

import {
  faTwitter,
  faFacebook,
  faWhatsapp,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCopy } from '@fortawesome/free-solid-svg-icons';

import { News } from 'src/app/models/news';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { NewsDetailPage } from '../news-detail/news-detail.page';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  skeleton = new Array(12);

  shareSocialShareOptions: any;
  showSocialShare = false;

  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faWhatsapp = faWhatsapp;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  faCopy = faCopy;

  private user$: Observable<User>;
  private clubTypeNews$: Observable<Array<News>>;
  private clubNews$: Observable<Array<News>>;
  private teamNews$: Observable<Array<News>>;

  constructor(
    public readonly loadingController: LoadingController,
    public readonly toastController: ToastController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalCtrl: ModalController
  ) {}

  ngOnInit(): void {
    this.user$ = this.authService.user$.pipe(take(1));
    this.clubTypeNews$ = this.getClubTypeNews();
    this.clubNews$ = this.getClubNews();
    this.teamNews$ = this.getTeamNews();
  }

  get news$(): Observable<Array<News>> {
    return combineLatest([
      this.clubTypeNews$,
      this.clubNews$,
      this.teamNews$,
    ]).pipe(map((news) => news.flat()));
  }

  async openModal(news: News): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: NewsDetailPage,
      presentingElement: this.routerOutlet.nativeEl,
      swipeToClose: true,
      showBackdrop: true,
      componentProps: {
        data: news,
      },
    });
    modal.present();

    await modal.onWillDismiss();
  }

  async share(news: News): Promise<void> {
    const device = await Device.getInfo();
    if (device.platform === 'web' && navigator && navigator['share']) {
      await Share.share({
        title: news.title,
        text: news.leadText,
        url: news.url,
        dialogTitle: news.title,
      }).catch();
    } else {
      await this.shareFallback(news);
    }
  }

  shareFallback(news: News): Promise<unknown> {
    return new Promise(async (resolve) => {
      // The configuration, set the share options
      this.shareSocialShareOptions = {
        displayNames: true,
        config: [
          {
            twitter: {
              socialShareUrl: `👉 ${news.title}: ${news.url}`,
              socialSharePopupWidth: 300,
              socialSharePopupHeight: 400,
            },
          },
          { facebook: { socialShareUrl: `👉 ${news.title}: ${news.url}` } },
          { whatsapp: { socialShareUrl: `👉 ${news.title}: ${news.url}` } },
          { linkedin: { socialShareUrl: `👉 ${news.title}: ${news.url}` } },
          { email: { socialShareUrl: `👉 ${news.title}: ${news.url}` } },
          { copy: { socialShareUrl: `👉 ${news.title}: ${news.url}` } },
        ],
      };
      this.showSocialShare = true;
      resolve(true);
    });
  }

  private getClubTypeNews(): Observable<Array<News>> {
    return this.user$.pipe(
      switchMap((user: User) => this.fbService.getClubRefs(user)),
      map((clubRefs) => clubRefs.map((clubRef) => clubRef.id)),
      switchMap((clubIds) => this.fbService.queryClubs(clubIds)),
      map((clubs) => [...new Set(clubs.map((club) => club.type))]),
      switchMap((clubTypes) => this.fbService.getNewsRefs(clubTypes))
    );
  }

  private getClubNews(): Observable<Array<News>> {
    return this.user$.pipe(
      switchMap((user: User) => this.fbService.getClubRefs(user)),
      map((clubRefs) => clubRefs.map((clubRef) => clubRef.id)),
      switchMap((clubIds) =>
        forkJoin([
          ...clubIds.map((clubId) => this.fbService.getClubNewsRefs(clubId)),
        ])
      ),
      map((news) => news.flat())
    );
  }

  private getTeamNews(): Observable<Array<News>> {
    return this.user$.pipe(
      switchMap((user: User) => this.fbService.getTeamRefs(user)),
      map((teamRefs) => teamRefs.map((teamRef) => teamRef.id)),
      switchMap((teamIds) =>
        forkJoin([
          ...teamIds.map((teamId) => this.fbService.getTeamNewsRefs(teamId)),
        ])
      ),
      map((news) => news.flat())
    );
  }
}
