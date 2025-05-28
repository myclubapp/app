import { Injectable } from "@angular/core";
import {
  AlertController,
  ToastController,
  ActionSheetController,
} from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { lastValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UiService {
  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private actionSheetController: ActionSheetController,
    private translate: TranslateService,
  ) {}

  /**
   * Zeigt einen Bestätigungsdialog an
   */
  async showConfirmDialog(options: {
    header: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
  }): Promise<boolean> {
    const alert = await this.alertController.create({
      header: options.header,
      message: options.message,
      buttons: [
        {
          text:
            options.cancelText ||
            (await lastValueFrom(this.translate.get("common.cancel"))),
          role: "destructive",
        },
        {
          text:
            options.confirmText ||
            (await lastValueFrom(this.translate.get("common.confirm"))),
          role: "confirm",
        },
      ],
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
    return role === "confirm";
  }

  /**
   * Zeigt einen Informationsdialog an
   */
  async showInfoDialog(options: {
    header: string;
    message: string;
    buttonText?: string;
  }): Promise<void> {
    const alert = await this.alertController.create({
      header: options.header,
      message: options.message,
      buttons: [
        {
          text:
            options.buttonText ||
            (await lastValueFrom(this.translate.get("common.ok"))),
          role: "confirm",
        },
      ],
    });

    await alert.present();
  }

  /**
   * Zeigt einen Formular-Dialog an
   */
  async showFormDialog(options: {
    header: string;
    inputs: any[];
    confirmText?: string;
    cancelText?: string;
  }): Promise<any> {
    const alert = await this.alertController.create({
      header: options.header,
      inputs: options.inputs,
      buttons: [
        {
          text:
            options.cancelText ||
            (await lastValueFrom(this.translate.get("common.cancel"))),
          role: "destructive",
        },
        {
          text:
            options.confirmText ||
            (await lastValueFrom(this.translate.get("common.save"))),
          role: "confirm",
        },
      ],
    });

    await alert.present();
    const result = await alert.onDidDismiss();

    if (result.role === "confirm") {
      // Je nach Ionic-Version: result.data oder (selten) result.values
      return result.data ? result.data : (result as any).values;
    }
    return null;
  }

  /**
   * Zeigt eine Toast-Nachricht an
   */
  async showToast(options: {
    message: string;
    duration?: number;
    color?: string;
    position?: "top" | "bottom" | "middle";
  }): Promise<void> {
    const toast = await this.toastController.create({
      message: options.message,
      duration: options.duration || 2000,
      color: options.color || "primary",
      position: options.position || "top",
    });
    await toast.present();
  }

  /**
   * Zeigt eine Erfolgs-Toast-Nachricht an
   */
  async showSuccessToast(message: string): Promise<void> {
    await this.showToast({
      message,
      color: "success",
    });
  }

  /**
   * Zeigt eine Fehler-Toast-Nachricht an
   */
  async showErrorToast(message: string): Promise<void> {
    await this.showToast({
      message,
      color: "danger",
    });
  }

  /**
   * Zeigt eine Warnung-Toast-Nachricht an
   */
  async showWarningToast(message: string): Promise<void> {
    await this.showToast({
      message,
      color: "warning",
    });
  }

  /**
   * Zeigt eine Toast-Nachricht für eine erfolgreiche Kopieraktion an
   */
  async showClipboardSuccessToast(): Promise<void> {
    const message = await lastValueFrom(
      this.translate.get("common.success__copy"),
    );
    await this.showToast({
      message,
      color: "success",
      duration: 1500,
    });
  }

  /**
   * Zeigt eine Toast-Nachricht für eine abgebrochene Aktion an
   */
  async showActionCanceledToast(): Promise<void> {
    const message = await lastValueFrom(
      this.translate.get("common.action__canceled"),
    );
    await this.showToast({
      message,
      color: "danger",
      duration: 1500,
    });
  }

  /**
   * Zeigt eine Toast-Nachricht für eine gelöschte Anfrage an
   */
  async showRequestDeletedToast(): Promise<void> {
    const message = await lastValueFrom(
      this.translate.get("club.action__request_deleted"),
    );
    await this.showToast({
      message,
      color: "danger",
      duration: 1500,
    });
  }

  /**
   * Zeigt eine Toast-Nachricht für eine erfolgreich gespeicherte Aktion an
   */
  async showSavedSuccessToast(): Promise<void> {
    const message = await lastValueFrom(
      this.translate.get("common.success__saved"),
    );
    await this.showToast({
      message,
      color: "success",
      duration: 1500,
    });
  }

  /**
   * Zeigt ein ActionSheet an
   */
  async showActionSheet(options: {
    header: string;
    buttons: {
      text: string;
      icon?: string;
      role?: string;
      handler?: () => void;
    }[];
  }): Promise<void> {
    const actionSheet = await this.actionSheetController.create({
      header: options.header,
      buttons: options.buttons,
    });

    await actionSheet.present();
  }
}
