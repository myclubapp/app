import {Router} from '@angular/router';
import {ProfileService} from './../../services/user/profile.service';
import {MenuController, ToastController} from '@ionic/angular';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {
  support: any;
  constructor(public toastController: ToastController, private router: Router, private profileService: ProfileService, public menuCtrl: MenuController) {
    this.menuCtrl.enable(false, 'menu');
    this.support = {
      name: '',
      message: '',
    };
  }

  ngOnInit() {}

  sendSupport(support) {
    this.profileService.supportAnfrage(support).then((data) => {
      this.support = {
        name: '',
        message: '',
      };
      this.toastController
        .create({
          message: 'Anfrage gesendet',
          color: 'success',
          duration: 2000,
        })
        .then((toast) => {
          toast.present();
          this.router.navigateByUrl('home/timeline');
        });
    });
  }
}
