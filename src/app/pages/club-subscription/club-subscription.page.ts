import { Component, Input, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  LoadingController,
  ToastController,
} from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { User } from "firebase/auth";
import {
  Observable,
  catchError,
  combineLatest,
  defaultIfEmpty,
  forkJoin,
  from,
  lastValueFrom,
  map,
  of,
  switchMap,
  take,
  tap,
} from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { Browser } from "@capacitor/browser";

@Component({
  selector: "app-club-subscription",
  templateUrl: "./club-subscription.page.html",
  styleUrls: ["./club-subscription.page.scss"],
  standalone: false,
})
export class ClubSubscriptionPage implements OnInit {
  @Input() clubId!: any;
  club$: Observable<any>;

  clubMemberCount$: Observable<number>;

  user$: Observable<User>;
  modules$: Observable<any>;
  products$: Observable<any>;
  user: User;
  subscriptionStatus = "active";

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly alertCtrl: AlertController,
    private readonly loadingCtrl: LoadingController,
    private readonly toastCtrl: ToastController,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService,
    private translate: TranslateService,
    private readonly authService: AuthService,
  ) {}

  ngOnInit() {
    // NavParams migration: now using @Input property directly
    this.club$ = this.getClub(this.clubId);
    this.products$ = this.getProductsAndPrices();
    this.modules$ = this.getModules();

    this.clubMemberCount$ = this.fbService.getClubMemberRefs(this.clubId).pipe(
      take(1),
      map((members) => members.length),
      tap((members) => console.log(members)),
    );
  }

  getClub(clubId: string) {
    return this.fbService.getClubRef(clubId).pipe(
      switchMap((club) => {
        if (!club) return of(null);
        return this.fbService.getClubSubscriptionList(clubId).pipe(
          map((subscriptions) =>
            subscriptions.sort((a, b) => b.created - a.created),
          ),
          switchMap((subscriptions) => {
            if (subscriptions.length === 0) {
              return of({
                ...club,
                activeSubscriptions: [],
                inactiveSubscriptions: [],
              });
            }
            const subscriptionsWithDetails$ = subscriptions.map(
              (subscription) =>
                combineLatest([
                  of(subscription),
                  this.fbService
                    .getClubSubscriptionInvoiceList(clubId, subscription.id)
                    .pipe(
                      map((invoices) =>
                        invoices.sort(
                          (a, b) =>
                            new Date(a.created).getTime() -
                            new Date(b.created).getTime(),
                        ),
                      ),
                      catchError(() => of([])), // Return empty array on error
                      defaultIfEmpty([]), // Ensure empty array if no invoices are found
                    ),
                  this.fbService
                    .getProduct(subscription.product.path.split("/")[1])
                    .pipe(
                      take(1),
                      catchError(() =>
                        of({
                          id: subscription.product,
                          name: "Unknown Product",
                        }),
                      ), // Return a default product on error
                    ),
                ]).pipe(
                  map(([subscription, invoices, product]) => ({
                    ...subscription,
                    invoices,
                    product,
                  })),
                ),
            );
            return combineLatest(subscriptionsWithDetails$).pipe(
              take(1),
              map((subscriptionsWithDetails) => ({
                ...club,
                activeSubscriptions: subscriptionsWithDetails.filter(
                  (sub) => sub.status == "active",
                ),
                inactiveSubscriptions: subscriptionsWithDetails.filter(
                  (sub) => sub.status !== "active",
                ),
              })),
            );
          }),
          catchError((err) => {
            console.error("Error fetching subscriptions:", err);
            return of({
              ...club,
              activeSubscriptions: [],
              inactiveSubscriptions: [],
            });
          }),
        );
      }),
      catchError((err) => {
        console.error("Error in getClubWithSubscriptions:", err);
        return of(null);
      }),
    );
  }

  changeSegment(event) {
    console.log(event);
    this.subscriptionStatus = event.detail.value;
  }

  getProductsAndPrices() {
    return this.fbService.getProducts().pipe(
      switchMap((products) => {
        if (products.length === 0) {
          return of([]); // Return an empty array if no products are found
        }
        const productsWithPrices$ = products.map((product) =>
          this.fbService.getPrices(product.id).pipe(
            take(1),

            map((prices) => ({
              ...product,
              prices: prices
                .map((price) => ({
                  ...price,
                  currency_upper: price.currency.toUpperCase(),
                  unit_amount: price.unit_amount
                    ? (price.unit_amount / 100).toFixed(2)
                    : "0.00", // Format to two decimal places
                }))
                .sort((a, b) => a.unit_amount - b.unit_amount), // Sorting prices based on the adjusted amount
            })),
            tap((prices) => console.log(prices)),

            catchError((err) => {
              console.error(
                `Error fetching prices for product ${product.id}:`,
                err,
              );
              return of({ ...product, prices: [] }); // Return product with empty price list on error
            }),
          ),
        );
        return combineLatest(productsWithPrices$); // Combine all products with their prices into a single array
      }),

      // Sorting the products based on stripe_metadata_max_users
      map((products) =>
        products.sort(
          (a, b) =>
            Number(a["stripe_metadata_max_users"]) -
            Number(b["stripe_metadata_max_users"]),
        ),
      ),

      catchError((err) => {
        console.error("Error fetching products and prices:", err);
        return of([]); // Return an empty array on error
      }),
    );
  }

  getModules() {
    return this.fbService.getModules().pipe(
      switchMap((products) => {
        if (products.length === 0) {
          return of([]); // Return an empty array if no products are found
        }
        const productsWithPrices$ = products.map((product) =>
          this.fbService.getPrices(product.id).pipe(
            take(1),
            map((prices) => ({
              ...product,
              prices: prices
                .map((price) => ({
                  ...price,
                  currency_upper: price.currency.toUpperCase(),
                  unit_amount: price.unit_amount
                    ? (price.unit_amount / 100).toFixed(2)
                    : "0.00", // Format to two decimal places
                }))
                .sort((a, b) => a.unit_amount - b.unit_amount), // Sorting prices based on the adjusted amount
            })),
            tap((prices) => console.log(prices)),
            catchError((err) => {
              console.error(
                `Error fetching prices for product ${product.id}:`,
                err,
              );
              return of({ ...product, prices: [] }); // Return product with empty price list on error
            }),
          ),
        );
        return combineLatest(productsWithPrices$); // Combine all products with their prices into a single array
      }),
      catchError((err) => {
        console.error("Error fetching products and prices:", err);
        return of([]); // Return an empty array on error
      }),
    );
  }

  async checkout(price, product) {
    console.log(price);
    console.log(product);

    const alert = await this.alertCtrl.create({
      buttons: [
        {
          id: "cancel",
          text: await lastValueFrom(this.translate.get("common.cancel")),
          role: "cancel",
        },
        {
          id: "ok",
          role: "ok",
          text: await lastValueFrom(this.translate.get("common.ok")),
          handler: async (data) => {
            /* const loading = await this.loadingCtrl.create({
              showBackdrop: false,
              message: "Bitte warten",
            })
            loading.present();

            from(this.fbService.checkoutSubscription(this.clubId, price, product)).pipe(
              switchMap(checkout => {
                console.log('Checkout session created with ID:', checkout.id);
                return this.fbService.getCheckoutSession(this.clubId, checkout.id);
              }),
              catchError(error => {
                console.error('Error during checkout process:', error);
                return of(null); // Handle errors or provide a fallback value
              })
            ).subscribe(checkoutSession => {
              if (checkoutSession) {
                console.log('Received checkout session data:', checkoutSession);
                if (checkoutSession && checkoutSession.url) {
                  loading.dismiss();
                  this.openUrl(checkoutSession.url);

                }
              } else {
                console.log('No checkout session data received.');
              }
            }); */
          },
        },
      ],
      header: "Abo kaufen",
      message:
        "Möchtest du das Abo für " +
        price.currency_upper +
        " " +
        price.unit_amount +
        " kaufen?",
    });
    alert.present();

    const result = await alert.onDidDismiss();
    console.log(result);
    if (result.role === "cancel") {
      this.toastActionCanceled();
    } else {
      const loading = await this.loadingCtrl.create({
        showBackdrop: false,
        message: "Bitte warten",
      });
      loading.present();

      const checkout: any = await this.fbService.checkoutSubscription(
        this.clubId,
        price,
        product,
      );
      //  console.log(checkout.data());
      const subscription = this.fbService
        .getCheckoutSession(this.clubId, checkout.id)
        .subscribe((checkoutSession) => {
          if (checkoutSession && checkoutSession.url) {
            console.log(checkoutSession);
            loading.dismiss();
            this.openUrl(checkoutSession.url);
            subscription.unsubscribe();
          }
        });
    }
  }
  async checkoutAddon(price, product) {
    console.log(price);
    console.log(product);

    const alert = await this.alertCtrl.create({
      buttons: [
        {
          id: "cancel",
          text: await lastValueFrom(this.translate.get("common.cancel")),
          role: "cancel",
        },
        {
          id: "ok",
          text: await lastValueFrom(this.translate.get("common.ok")),
          handler: async () => {
            const loading = await this.loadingCtrl.create({
              showBackdrop: false,
              message: "Bitte warten",
            });
            loading.present();

            from(this.fbService.checkoutAddon(this.clubId, price, product))
              .pipe(
                switchMap((checkout) => {
                  console.log("Checkout session created with ID:", checkout.id);
                  return this.fbService.getCheckoutSession(
                    this.clubId,
                    checkout.id,
                  );
                }),
                catchError((error) => {
                  console.error("Error during checkout process:", error);
                  return of(null); // Handle errors or provide a fallback value
                }),
              )
              .subscribe((checkoutSession) => {
                if (checkoutSession) {
                  console.log(
                    "Received checkout session data:",
                    checkoutSession,
                  );
                  if (checkoutSession && checkoutSession.url) {
                    loading.dismiss();
                    this.openUrl(checkoutSession.url);
                  }
                } else {
                  console.log("No checkout session data received.");
                }
              });
          },
        },
      ],
      header: "Abo kaufen",
      message:
        "Möchtest du das Abo für " +
        price.currency_upper +
        " " +
        price.unit_amount +
        " kaufen?",
    });
    alert.present();
  }

  hasAcitveSubscription(subscriptionList) {
    // console.log(subscriptionList)
    return subscriptionList.filter(
      (subcription) => subcription.status === "active",
    );
  }

  async openUrl(url: string) {
    Browser.open({
      url: url,
    });
  }
  async toastActionSaved() {
    const toast = await this.toastCtrl.create({
      message: await lastValueFrom(this.translate.get("common.success__saved")),
      duration: 1500,
      position: "top",
      color: "success",
    });

    await toast.present();
  }
  async toastActionCanceled() {
    const toast = await this.toastCtrl.create({
      message: await lastValueFrom(
        this.translate.get("common.action__canceled"),
      ),
      duration: 1500,
      position: "top",
      color: "danger",
    });
    await toast.present();
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

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.clubId, "confirm");
  }
}
