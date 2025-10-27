import { Component, OnInit, Optional } from "@angular/core";
import { PushNotifications } from "@capacitor/push-notifications";
import { IonRouterOutlet, ModalController, Platform } from "@ionic/angular";
import { Router } from "@angular/router";
// import { Badge } from '@capawesome/capacitor-badge';
import { map, Observable, Subscription, switchMap, take, tap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { NotificationService } from "src/app/services/firebase/notification.service";
import { Timestamp } from "@angular/fire/firestore";
import { ClubInvoiceDetailPage } from "../../club-invoice-detail/club-invoice-detail.page";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.page.html",
  styleUrls: ["./notification.page.scss"],
  standalone: false,
})
export class NotificationPage implements OnInit {
  notifications$: Observable<any[]>;
  notificationsRead$: Observable<any[]>;
  skeleton = new Array(12);
  subscription: Subscription;
  subscriptionToggle: Subscription;

  constructor(
    private readonly authService: AuthService,
    private readonly modalCtrl: ModalController,
    private readonly router: Router,
    private readonly notificationService: NotificationService,
    private readonly platform: Platform,
    @Optional() private readonly routerOutlet: IonRouterOutlet,
  ) {}

  ngOnInit() {
    this.notifications$ = this.getNotifications();
    /*this.subscription = this.notifications$.subscribe((notifications) => {
      // console.log('Notifications', notifications);
      Badge.set({ count: notifications.length }).then(()=>
        console.log('Badge set to ' + notifications.length));
    });*/

    this.notificationsRead$ = this.getReadNotifications();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionToggle) {
      this.subscriptionToggle.unsubscribe();
    }
  }

  async markALlAsRead() {
    try {
      this.subscription = this.notifications$.subscribe((notifications) => {
        notifications.forEach((notification) => {
          if (!notification.opened) {
            this.toggle(notification);
          }
        });
      });
      if (this.platform.is("capacitor")) {
        await PushNotifications.removeAllDeliveredNotifications();
      }
    } catch (error) {
      console.error(
        "Fehler beim Markieren aller Benachrichtigungen als gelesen:",
        error,
      );
    }
  }

  getNotifications(): Observable<any[]> {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        if (!user) throw new Error("User not found");
      }),
      switchMap((user) => {
        return this.notificationService.getNotifications(user).pipe(
          map((notifications) => {
            try {
              if (notifications == null || notifications.length === 0) {
                if (this.platform.is("capacitor")) {
                  PushNotifications.removeAllDeliveredNotifications();
                }
              }
              return notifications.sort(
                (a, b) =>
                  Timestamp.fromMillis(b.date).toMillis() -
                  Timestamp.fromMillis(a.date).toMillis(),
              );
            } catch (error) {
              console.error(
                "Fehler beim Verarbeiten der Benachrichtigungen:",
                error,
              );
              return [];
            }
          }),
        );
      }),
    );
  }
  getReadNotifications(): Observable<any[]> {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        if (!user) throw new Error("User not found");
      }),
      switchMap((user) => {
        return this.notificationService.getReadNotifications(user).pipe(
          tap((notifications) => {
            console.log("Notifications", notifications);
          }),
          map((notifications) => {
            return notifications.sort(
              (a, b) =>
                Timestamp.fromMillis(b.date).toMillis() -
                Timestamp.fromMillis(a.date).toMillis(),
            );
          }),
          tap((notifications) => {
            // console.log('Sorted Notifications', notifications);
          }),
        );
      }),
    );
  }
  toggle(notification) {
    try {
      this.notificationService.toggleNotification(notification);

      this.subscriptionToggle = this.notifications$
        .pipe(
          take(1),
          tap((notifications) => {
            try {
              if (notifications == null || notifications.length === 0) {
                if (this.platform.is("capacitor")) {
                  PushNotifications.removeAllDeliveredNotifications();
                }
              }
            } catch (error) {
              console.error(
                "Fehler beim Entfernen der Benachrichtigungen:",
                error,
              );
            }
          }),
        )
        .subscribe((notifications) => {
          try {
            if (notifications.length === 0) {
              if (this.platform.is("capacitor")) {
                PushNotifications.removeAllDeliveredNotifications();
              }
            }
          } catch (error) {
            console.error(
              "Fehler beim Entfernen der Benachrichtigungen:",
              error,
            );
          }
        });
    } catch (error) {
      console.error("Fehler beim Umschalten der Benachrichtigung:", error);
    }
  }

  async openNotification(notification) {
    console.log("Notification", notification);
    // console.log("TYPE:  " + notification.data.type);

    if (
      notification.data &&
      notification.data.type &&
      notification.data.type === "helferEvent"
    ) {
      await this.close();
      await this.router
        .navigateByUrl("/t/helfer", {
          state: notification.data,
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (
      notification.data &&
      notification.data.type &&
      notification.data.type === "clubEvent"
    ) {
      await this.close();
      await this.router
        .navigateByUrl("/t/events", {
          state: notification.data,
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (
      notification.data &&
      notification.data.type &&
      notification.data.type === "clubRequest"
    ) {
      await this.close();

      this.router.navigate([{ outlets: { primary: null } }]).then(() => {
        this.router.navigate(["/club-list"]);
      });

      /*

      await this.router.navigateByUrl("/club-list", {
        state: notification.data,
      }).catch(e => {
        console.log(e);
      });
*/
    } else if (
      notification.data &&
      notification.data.type &&
      notification.data.type === "clubRequestAdmin"
    ) {
      // await this.confirm({data: notification.data});
      await this.close();

      this.router
        .navigateByUrl("/club-list", {
          state: notification.data,
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (
      notification.data &&
      notification.data.type &&
      (notification.data.type === "news" ||
        notification.data.type === "clubNews")
    ) {
      await this.confirm({ data: notification.data });
    } else if (
      notification.data &&
      notification.data.type &&
      notification.data.type === "training"
    ) {
      await this.close();
      await this.router
        .navigateByUrl("/t/training", {
          state: notification.data,
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (
      notification.data &&
      notification.data.type &&
      notification.data.type === "invoice"
    ) {
      await this.confirm({ data: notification.data });

      const topModal = await this.modalCtrl.getTop();
      const presentingElement = topModal || this.routerOutlet?.nativeEl;

      const modal = await this.modalCtrl.create({
        component: ClubInvoiceDetailPage,
        presentingElement,
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          clubId: notification.data.clubId,
          periodId: notification.data.periodId,
          invoiceId: notification.data.id,
        },
      });
      await modal.present();
    } else {
      // TODO: handle other types of notifications
    }
    if (!notification.opened) {
      this.toggle(notification);
      // await PushNotifications.removeAllDeliveredNotifications();
    }
  }
  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm(data: any) {
    return await this.modalCtrl.dismiss(data.data, "confirm");
  }
}
