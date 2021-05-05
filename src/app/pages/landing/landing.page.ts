import {MenuController, IonSlides} from '@ionic/angular';
import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  /*@ViewChild('slides', {
    static: true
  }) slides: IonSlides;*/
  constructor(public menuCtrl: MenuController) {
    this.menuCtrl.enable(false, 'menu');
  }

  ngAfterViewChecked() {
    /*    this.slides.pager = true;
    this.slides.options = {
      direction: 'vertical'
    }*/
  }

  ngOnInit() {
    this.menuCtrl.enable(false, 'menu');
    /*
    this.slides.pager = true;
    this.slides.options = {
      direction: 'vertical'
    }*/
  }
  onSlideChangeStart(event) {}

  nextSlide() {
    //this.slides.slideNext();
  }
}
