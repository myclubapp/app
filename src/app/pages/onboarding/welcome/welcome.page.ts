import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

interface WelcomeSlide {
  title: string;
  subtitle: string;
  description: string;
  backgroundColor: string;
}

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.page.html",
  styleUrls: ["./welcome.page.scss"],
  standalone: false,
})
export class WelcomePage {
  currentSlide = 0;

  welcomeSlides: WelcomeSlide[] = [
    {
      title: "Willkommen bei myclub",
      subtitle: "Verbinde & Spiele",
      description:
        "Tritt deiner Sportgemeinschaft bei und bleibe mit deinem Team, Spielen und Events verbunden.",
      backgroundColor: "#667eea",
    },
    {
      title: "Verfolge deine Spiele",
      subtitle: "Kein Spiel verpassen",
      description:
        "Behalte alle deine Spiele, Ergebnisse und kommende Matches an einem Ort im Überblick.",
      backgroundColor: "#764ba2",
    },
    {
      title: "Bleibe verbunden",
      subtitle: "Team-Kommunikation",
      description:
        "Chatte mit Teammitgliedern, erhalte Benachrichtigungen und bleibe über Club-Neuigkeiten informiert.",
      backgroundColor: "#f093fb",
    },
  ];

  constructor(
    private router: Router,
    private translate: TranslateService,
  ) {}

  nextSlide() {
    if (this.currentSlide < this.welcomeSlides.length - 1) {
      this.currentSlide++;
    }
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  skip() {
    this.navigateToLogin();
  }

  getStarted() {
    this.navigateToLogin();
  }

  private navigateToLogin() {
    this.router.navigate(["/login"], { replaceUrl: true });
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
