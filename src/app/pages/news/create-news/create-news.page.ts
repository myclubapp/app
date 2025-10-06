import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { Club } from "src/app/models/club";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { NewsService } from "src/app/services/firebase/news.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { Profile } from "src/app/models/user";
import { News } from "src/app/models/news";
import { Timestamp } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-create-news",
  templateUrl: "./create-news.page.html",
  styleUrls: ["./create-news.page.scss"],
  standalone: false,
})
export class CreateNewsPage implements OnInit {
  clubAdminList$: Observable<Club[]>;
  user: any;
  userProfile: Profile;
  news: Partial<News> = {
    title: "",
    leadText: "",
    text: "",
    date: new Date(),
    url: "",
    clubId: "",
  };

  constructor(
    private readonly fbService: FirebaseService,
    private readonly authService: AuthService,
    private readonly userProfileService: UserProfileService,
    private readonly newsService: NewsService,
    private readonly router: Router,
    private readonly modalCtrl: ModalController,
  ) {}

  ngOnInit() {
    this.clubAdminList$ = this.fbService.getClubAdminList();
    this.authService.getUser$().subscribe((user) => {
      this.user = user;
      if (user) {
        this.userProfileService.getUserProfile(user).subscribe((profile) => {
          this.userProfile = profile;
        });
      }
    });
  }

  async createNews() {
    // Autor setzen
    this.news.author =
      this.userProfile?.firstName + " " + this.userProfile?.lastName;
    this.news.authorImage = this.userProfile?.profilePicture || "";
    this.news.date = this.news.date ? new Date(this.news.date) : new Date();
    // clubId ggf. aus Liste setzen, falls nur ein Club
    if (!this.news.clubId && this.clubAdminList$) {
      this.clubAdminList$.subscribe((list) => {
        if (list.length === 1) {
          this.news.clubId = list[0].id;
        }
      });
    }
    // News speichern
    const newsToSave = {
      ...this.news,
    };
    // Speichern in club/{clubId}/news
    await this.newsService.createClubNews(this.news.clubId, this.news);
    await this.close();
  }

  async close() {
    return this.modalCtrl.dismiss(null, "close");
  }
}
