import { Component, Input, OnInit } from "@angular/core";
import { ModalController, NavParams, ToastController } from "@ionic/angular";
import { FirebaseService } from "src/app/services/firebase.service";
import { ClubLink } from "src/app/models/club-link";
import { TranslateService } from "@ngx-translate/core";
import { lastValueFrom } from "rxjs";
import { UiService } from "src/app/services/ui.service";

@Component({
  selector: "app-club-links-create",
  templateUrl: "./club-links-create.page.html",
  styleUrls: ["./club-links-create.page.scss"],
  standalone: false,
})
export class ClubLinksCreatePage implements OnInit {
  @Input("linkData") linkCopy: ClubLink;
  @Input("clubId") clubId: string;
  link: any;
  selectedFile: File | null = null;
  previewUrl: string | null = null;

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly navParams: NavParams,
    private readonly fbService: FirebaseService,
    private readonly toastCtrl: ToastController,
    private readonly translate: TranslateService,
    private readonly uiService: UiService,
  ) {
    this.linkCopy = this.navParams.get("linkData");
    this.clubId = this.navParams.get("clubId");
  }

  ngOnInit() {
    if (this.linkCopy) {
      this.link = { ...this.linkCopy };
      if (this.link.type === "image" && this.link.url) {
        this.previewUrl = this.link.url;
      }
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile && this.link.type === "image") {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      this.previewUrl = null;
    }
  }

  async close() {
    return this.modalCtrl.dismiss(null, "close");
  }

  async createLink() {
    if (!this.link.title || !this.link.type || !this.link.description) {
      this.toastActionError({
        message:
          "Bitte füllen Sie alle erforderlichen Felder aus (Titel, Beschreibung und Typ).",
      });
      return null;
    }

    const result = await this.uiService.showConfirmDialog({
      header: await lastValueFrom(this.translate.get("common.confirmation")),
      message: await lastValueFrom(
        this.translate.get("link.create_link_confirm"),
      ),
      confirmText: await lastValueFrom(this.translate.get("common.confirm")),
      cancelText: await lastValueFrom(this.translate.get("common.cancel")),
    });

    if (result) {
      try {
        if (this.linkCopy?.id) {
          // Update existing link
          await this.fbService.updateClubLink(
            this.clubId,
            this.linkCopy.id,
            this.link,
          );
          if (this.selectedFile) {
            const fileUrl = await this.fbService.uploadClubLinkFile(
              this.clubId,
              this.linkCopy.id,
              this.selectedFile,
            );
            await this.fbService.updateClubLink(this.clubId, this.linkCopy.id, {
              ...this.link,
              url: fileUrl,
            });
          }
        } else {
          // Create new link
          console.log("Create new link", this.link);
          const newLinkRef = await this.fbService.addClubLink(
            this.clubId,
            this.link,
          );
          console.log("New link id", newLinkRef.id);
          if (this.selectedFile) {
            const fileUrl = await this.fbService.uploadClubLinkFile(
              this.clubId,
              newLinkRef.id,
              this.selectedFile,
            );
            console.log("Upload file", fileUrl);
            await this.fbService.updateClubLink(this.clubId, newLinkRef.id, {
              ...this.link,
              url: fileUrl,
            });
            console.log("Update link", this.link, fileUrl);
          }
        }

        const toast = await this.toastCtrl.create({
          message: await lastValueFrom(
            this.translate.get("common.success__saved"),
          ),
          duration: 2000,
          position: "top",
          color: "success",
        });
        await toast.present();

        return this.modalCtrl.dismiss({}, "confirm");
      } catch (error) {
        this.toastActionError(error);
        return null;
      }
    }
    return null;
  }

  async toastActionError(error) {
    const toast = await this.toastCtrl.create({
      message: error.message,
      duration: 1500,
      position: "top",
      color: "danger",
    });
    await toast.present();
  }
}
