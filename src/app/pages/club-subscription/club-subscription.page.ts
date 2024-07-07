import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController,LoadingController, NavParams, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'firebase/auth';
import { Observable, catchError, combineLatest, defaultIfEmpty, forkJoin, from, lastValueFrom, map, of, switchMap, take, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserProfileService } from 'src/app/services/firebase/user-profile.service';
import { Browser } from "@capacitor/browser";

@Component({
  selector: 'app-club-subscription',
  templateUrl: './club-subscription.page.html',
  styleUrls: ['./club-subscription.page.scss'],
})
export class ClubSubscriptionPage implements OnInit {
  @Input("clubId") clubId: any;
  club$: Observable<any>;

  user$: Observable<User>;
  products$: Observable<any>;
  user: User;

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly alertCtrl: AlertController,
    private readonly loadingCtrl: LoadingController,
    private readonly toastCtrl: ToastController,
    private readonly userProfileService: UserProfileService,
    private readonly fbService: FirebaseService,
    private translate: TranslateService,
    private readonly authService: AuthService,
    public navParams: NavParams,


  ) { }

  ngOnInit() {
    this.clubId = this.navParams.get("clubId");
    this.club$ = this.getClub(this.clubId);
    this.products$ = this.getProductsAndPrices();
  }

  getClub(clubId: string) {
    return this.fbService.getClubRef(clubId).pipe(
        switchMap((club) => {
            if (!club) return of(null);
            return this.fbService.getClubSubscriptionList(clubId).pipe(
                map(subscriptions => subscriptions.sort((a, b) => b.created - a.created)),
                switchMap((subscriptions) => {
                    if (subscriptions.length === 0) {
                        return of({
                            ...club,
                            subscriptions: []
                        });
                    }
                    const subscriptionsWithDetails$ = subscriptions.map(subscription =>
                        combineLatest([
                            of(subscription),
                            this.fbService.getClubSubscriptionInvoiceList(clubId, subscription.id).pipe(
                                map(invoices => invoices.sort((a, b) => new Date(a.created).getTime() - new Date(b.created).getTime())),
                                catchError(() => of([])), // Return empty array on error
                                defaultIfEmpty([]) // Ensure empty array if no invoices are found
                            ),
                            this.fbService.getProduct(subscription.product.path.split('/')[1]).pipe(
                              take(1),
                                catchError(() => of({ id: subscription.product, name: "Unknown Product" })) // Return a default product on error
                            )
                        ]).pipe(
                            map(([subscription, invoices, product]) => ({
                                ...subscription,
                                invoices,
                                product
                            }))
                        )
                    );
                    return combineLatest(subscriptionsWithDetails$).pipe(
                        map(subscriptionsWithDetails => ({
                            ...club,
                            subscriptions: subscriptionsWithDetails
                        }))
                    );
                }),
                catchError(err => {
                    console.error("Error fetching subscriptions:", err);
                    return of({
                        ...club,
                        subscriptions: []
                    });
                })
            );
        }),
        catchError(err => {
            console.error("Error in getClubWithSubscriptionsAndInvoices:", err);
            return of(null);
        })
    );
}



  getProductsAndPrices() {
    return this.fbService.getProducts().pipe(
      switchMap(products => {
        if (products.length === 0) {
          return of([]); // Return an empty array if no products are found
        }
        const productsWithPrices$ = products.map(product =>
          this.fbService.getPrices(product.id).pipe(
            map(prices => ({
              ...product,
              prices: prices.map(price => ({
                ...price,
                currency_upper: price.currency.toUpperCase(),
                unit_amount: price.unit_amount ? (price.unit_amount / 100).toFixed(2) : "0.00" // Format to two decimal places
              })).sort((a, b) => a.unit_amount - b.unit_amount) // Sorting prices based on the adjusted amount
            })),
            catchError(err => {
              console.error(`Error fetching prices for product ${product.id}:`, err);
              return of({ ...product, prices: [] }); // Return product with empty price list on error
            })
          )
        );
        return combineLatest(productsWithPrices$); // Combine all products with their prices into a single array
      }),
      catchError(err => {
        console.error("Error fetching products and prices:", err);
        return of([]); // Return an empty array on error
      })
    );
  }

  async checkout(price, product) {
    console.log(price);
    console.log(product);

    const alert = await this.alertCtrl.create({
      buttons: [
        {
          id: "cancel",
          text:  await lastValueFrom(this.translate.get("common.cancel")),
          role: "cancel"
        },{
        id: "ok",
        text: await lastValueFrom(this.translate.get("common.ok")),
        handler: async ()=>{
          const loading = await this.loadingCtrl.create({
            showBackdrop: false,
            message: "Bitte warten",
          })
          loading.present();
      
          from(this.fbService.checkout(this.clubId, price, product)).pipe(
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
          });
        },
      }
     ],
      header: "Abo kaufen",
      message: "Möchtest du das Abo für " + price.currency_upper + " " + price.unit_amount + " kaufen?",
    })
    alert.present();


    
  }

  hasAcitveSubscription(subscriptionList){
    // console.log(subscriptionList)
    return subscriptionList.filter(subcription=>subcription.status === "active");
  }

  async openUrl(url: string) {
    Browser.open({
      url: url
    });
  }
  async toastActionSaved() {
    const toast = await this.toastCtrl.create({
      message: await lastValueFrom(this.translate.get("common.success__saved")),
      duration: 1500,
      position: "bottom",
      color: "success",
    });

    await toast.present();
  }
  async toastActionCanceled() {
    const toast = await this.toastCtrl.create({
      message: await lastValueFrom(this.translate.get("club.action__canceled")),
      duration: 1500,
      position: "bottom",
      color: "danger",
    });
    await toast.present();
  }

  async toastActionError(error) {
    const toast = await this.toastCtrl.create({
      message: error.message,
      duration: 2000,
      position: "bottom",
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

