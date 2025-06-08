import { Component, Input, OnInit } from "@angular/core";
import {
  ModalController,
  NavParams,
  ToastController,
  ItemReorderEventDetail,
  IonItem,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
  IonItemSliding,
} from "@ionic/angular";
import { FirebaseService } from "src/app/services/firebase.service";
import { ClubLink } from "src/app/models/club-link";
import { Observable, BehaviorSubject, firstValueFrom } from "rxjs";
import { TranslateService } from "@ngx-translate/core";
import { Club } from "src/app/models/club";
import { Browser } from "@capacitor/browser";
import { map } from "rxjs/operators";

@Component({
  selector: "app-club-links",
  templateUrl: "./club-links.page.html",
  styleUrls: ["./club-links.page.scss"],
  standalone: false,
  // imports: [IonItem, IonLabel, IonList, IonReorder, IonReorderGroup],
})
export class ClubLinksPage implements OnInit {
  @Input("clubId") clubId: any;
  club$: Observable<Club>;
  links$: Observable<ClubLink[]>;
  clubAdminList$: Observable<any[]>;
  allowEdit = false;
  searchTerm = new BehaviorSubject<string>("");
  newLink: Partial<ClubLink> = {
    type: "web",
    showOnCard: false,
  };
  isAddingLink = false;
  selectedFile: File | null = null;

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly navParams: NavParams,
    private readonly fbService: FirebaseService,
    private readonly toastCtrl: ToastController,
    private readonly translate: TranslateService,
  ) {
    this.clubId = this.navParams.get("clubId");
  }

  ngOnInit() {
    this.club$ = this.fbService.getClubRef(this.clubId);
    this.links$ = this.fbService
      .getClubLinks(this.clubId)
      .pipe(
        map((links) => links.sort((a, b) => (a.order || 0) - (b.order || 0))),
      );
    this.clubAdminList$ = this.fbService.getClubAdminList();
  }

  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return this.fbService.isClubAdmin(clubAdminList, clubId);
  }

  edit() {
    this.allowEdit = !this.allowEdit;
  }

  handleSearch(event: any) {
    this.searchTerm.next(event.detail.value);
  }

  async editLink(item: IonItemSliding, link: ClubLink) {
    item.close();
    this.newLink = { ...link };
    this.isAddingLink = true;
  }
  async openLink(url: string) {
    await Browser.open({ url });
  }
  async deleteLink(item: IonItemSliding, linkId: string) {
    item.close();
    try {
      await this.fbService.deleteClubLink(this.clubId, linkId);
      const toast = await this.toastCtrl.create({
        message: await this.translate
          .get("common.success__deleted")
          .toPromise(),
        duration: 2000,
        position: "top",
        color: "success",
      });
      await toast.present();
    } catch (error) {
      const toast = await this.toastCtrl.create({
        message: error.message,
        duration: 2000,
        position: "top",
        color: "danger",
      });
      await toast.present();
    }
  }

  async updateShowOnCard(linkId: string, showOnCard: boolean) {
    try {
      await this.fbService.updateClubLink(this.clubId, linkId, { showOnCard });
    } catch (error) {
      const toast = await this.toastCtrl.create({
        message: error.message,
        duration: 2000,
        position: "top",
        color: "danger",
      });
      await toast.present();
    }
  }

  async handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    try {
      const links = await firstValueFrom(this.links$);
      const reorderedLinks = ev.detail.complete(links);

      const updatedOrder = reorderedLinks.map((link, index) => ({
        id: link.id,
        order: index,
      }));

      await this.fbService.updateLinkOrder(this.clubId, updatedOrder);

      const toast = await this.toastCtrl.create({
        message: await this.translate.get("common.success__saved").toPromise(),
        duration: 2000,
        position: "top",
        color: "success",
      });
      await toast.present();
    } catch (error) {
      const toast = await this.toastCtrl.create({
        message: error.message,
        duration: 2000,
        position: "top",
        color: "danger",
      });
      await toast.present();
    }
  }

  close() {
    this.modalCtrl.dismiss();
  }

  getLinkIcon(type: string): string {
    switch (type) {
      case "web":
        return "globe-outline";
      case "image":
        return "image-outline";
      case "pdf":
        return "document-outline";
      default:
        return "link-outline";
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  async addLink() {
    if (!this.isValidLink()) {
      return;
    }

    try {
      const linkData: Omit<ClubLink, "id" | "createdAt" | "updatedAt"> = {
        title: this.newLink.title!,
        description: this.newLink.description!,
        type: this.newLink.type!,
        url: this.newLink.url || "",
        showOnCard: this.newLink.showOnCard || false,
        order: 0,
      };

      if (this.selectedFile) {
        // Handle file upload
        const fileUrl = await this.fbService.uploadClubLinkFile(
          this.clubId,
          this.selectedFile,
        );
        linkData.url = fileUrl;
      }

      if (this.newLink.id) {
        // Update existing link
        await this.fbService.updateClubLink(
          this.clubId,
          this.newLink.id,
          linkData,
        );
      } else {
        // Create new link
        await this.fbService.addClubLink(this.clubId, linkData);
      }

      this.isAddingLink = false;
      this.newLink = {
        type: "web",
        showOnCard: false,
      };
      this.selectedFile = null;

      const toast = await this.toastCtrl.create({
        message: await this.translate.get("common.success__saved").toPromise(),
        duration: 2000,
        position: "top",
        color: "success",
      });
      await toast.present();
    } catch (error) {
      const toast = await this.toastCtrl.create({
        message: error.message,
        duration: 2000,
        position: "top",
        color: "danger",
      });
      await toast.present();
    }
  }

  isValidLink(): boolean {
    if (!this.newLink.title || !this.newLink.description) {
      return false;
    }

    if (this.newLink.type === "web" && !this.newLink.url) {
      return false;
    }

    if (
      !this.newLink.id &&
      (this.newLink.type === "image" || this.newLink.type === "pdf") &&
      !this.selectedFile
    ) {
      return false;
    }

    return true;
  }
}
