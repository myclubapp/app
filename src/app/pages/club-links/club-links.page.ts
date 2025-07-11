import { Component, Input, OnInit, Optional } from "@angular/core";
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
  IonRouterOutlet,
} from "@ionic/angular";
import { FirebaseService } from "src/app/services/firebase.service";
import { ClubLink } from "src/app/models/club-link";
import {
  Observable,
  BehaviorSubject,
  firstValueFrom,
  lastValueFrom,
} from "rxjs";
import { TranslateService } from "@ngx-translate/core";
import { Club } from "src/app/models/club";
import { Browser } from "@capacitor/browser";
import { map } from "rxjs/operators";
import { ClubLinksCreatePage } from "../club-links-create/club-links-create.page";
import { ClubLinksEditPage } from "../club-links-edit/club-links-edit.page";

@Component({
  selector: "app-club-links",
  templateUrl: "./club-links.page.html",
  styleUrls: ["./club-links.page.scss"],
  standalone: false,
})
export class ClubLinksPage implements OnInit {
  @Input("clubId") clubId: any;
  club$: Observable<Club>;
  links$: Observable<ClubLink[]>;
  clubAdminList$: Observable<any[]>;
  allowEdit = false;
  searchTerm = new BehaviorSubject<string>("");

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly navParams: NavParams,
    private readonly fbService: FirebaseService,
    private readonly toastCtrl: ToastController,
    private readonly translate: TranslateService,
    @Optional() private readonly routerOutlet: IonRouterOutlet,
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
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: ClubLinksEditPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        linkData: link,
        clubId: this.clubId,
      },
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();
    if (role === "confirm") {
      // Refresh links list
      this.links$ = this.fbService
        .getClubLinks(this.clubId)
        .pipe(
          map((links) => links.sort((a, b) => (a.order || 0) - (b.order || 0))),
        );
    }
  }

  async openLink(url: string) {
    await Browser.open({ url });
  }

  async deleteLink(item: IonItemSliding, linkId: string) {
    item.close();
    try {
      await this.fbService.deleteClubLink(this.clubId, linkId);
      const toast = await this.toastCtrl.create({
        message: await lastValueFrom(
          this.translate.get("common.success__deleted"),
        ),
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

  async openAddLinkModal() {
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: ClubLinksCreatePage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        clubId: this.clubId,
        linkData: {},
      },
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();
    if (role === "confirm") {
      // Refresh links list
      this.links$ = this.fbService
        .getClubLinks(this.clubId)
        .pipe(
          map((links) => links.sort((a, b) => (a.order || 0) - (b.order || 0))),
        );
    }
  }
}
