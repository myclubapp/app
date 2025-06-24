import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule, ModalController } from "@ionic/angular";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { lastValueFrom } from "rxjs";
import { UiService } from "src/app/services/ui.service";

@Component({
  selector: "app-create-new-club",
  templateUrl: "./create-new-club.page.html",
  styleUrls: ["./create-new-club.page.scss"],
  standalone: false,
})
export class CreateNewClubPage {
  clubData = {
    name: "",
    type: "sports",
    otherType: "",
    sportType: "other",
    sportTypeOther: "",
    teams: null,
    members: null,
  };

  currentStep = "type";

  constructor(
    private modalCtrl: ModalController,
    private translate: TranslateService,
    private uiService: UiService,
  ) {}

  getStepNumber(): number {
    // Schritt 3, wenn Sportverein, sonst Schritt 2
    return this.clubData.type === "sports" ? 3 : 2;
  }

  goToNext(step: string) {
    if (step === "type" && this.clubData.type === "sports") {
      this.currentStep = "sportType";
    } else {
      this.currentStep = "details";
    }
  }

  isSportTypeValid() {
    if (!this.clubData.sportType) return false;
    if (this.clubData.sportType === "other") {
      return !!this.clubData.sportTypeOther?.trim();
    }
    return true;
  }

  isDetailsValid() {
    if (this.clubData.type === "other" && !this.clubData.otherType?.trim())
      return false;
    if (!this.clubData.name?.trim()) return false;
    if (!this.clubData.teams || this.clubData.teams < 1) return false;
    if (!this.clubData.members || this.clubData.members < 1) return false;
    return true;
  }

  async cancel() {
    return this.modalCtrl.dismiss(null, "cancel");
  }

  async confirm() {
    if (!this.isDetailsValid()) {
      await this.uiService.showErrorToast(
        await lastValueFrom(
          this.translate.get("onboarding.error.club_form_invalid"),
        ),
      );
      return false;
    }
    return this.modalCtrl.dismiss(this.clubData, "confirm");
  }

  onAccordionChange(event: any) {
    this.currentStep = event.detail.value;
  }

  onTypeChange() {
    this.currentStep = "type";
  }
}
