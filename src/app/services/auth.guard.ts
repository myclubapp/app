import { AlertController, MenuController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService, 
    private router: Router,
    public menuCtrl: MenuController,
    private alertCtrl: AlertController) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      return new Promise(async (resolve, reject) => {
        try {
          const user = await this.authService.getUser().catch(reject=>{
            console.log("Fehler: " + reject);

          });
          if (user && user.emailVerified) {
            resolve(true);
          } else if (user && !user.emailVerified){
           
            const alert = await this.alertCtrl.create({
              header: "E-Mail Adresse verifizieren",
              message: "Bitte verifiziere zuerst deine E-Mail Adresse. Prüfe deinen Posteingang/Spam Ordner.",
              buttons: [
                {
                  text: 'OK',
                  handler: data => {
                    this.router.navigateByUrl('/login');
                  },
                },
                {
                  text: 'nochmals senden',
                  handler: data => {
                    user.sendEmailVerification({
                      "url": String(window.location)
                    }).then(ok=>{
                      console.log("sendEmailVerification")
                    },error=>{
                      console.log("Error sendEmailVerification")
                    });
                    this.router.navigateByUrl('/login');
                    this.menuCtrl.enable(false, 'menu');
                  },
                },
              ],
            });
            await alert.present();
            reject('email not verified');
          } else {
            this.router.navigateByUrl('/landing');
            reject('No user logged in');
          }
        } catch (error) {
          reject(error);
        }
      });
  }
}