import {
  Router
} from '@angular/router';
import {
  ProfileService
} from './../../services/user/profile.service';
import {
  MenuController,
  IonSlides
} from '@ionic/angular';
import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {
  showSkip = true;

  @ViewChild('slides', {
    static: true
  }) slides: IonSlides;

  constructor(
    public menuCtrl: MenuController,
    private router: Router,
    private profileService: ProfileService,
  ) {
    this.menuCtrl.enable(false, 'menu');
  }

  ngOnInit() {

  }

  ngAfterViewChecked() {
    this.slides.pager = true;
  }


  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }

  ionViewWillEnter() {
    this.slides.slideTo(0);
    /*this.storage.get('ion_did_tutorial').then(res => {
      if (res === true) {
        this.router.navigateByUrl('/app/tabs/schedule', { replaceUrl: true });
      }
    });*/

    this.menuCtrl.enable(false);
  }

  /*ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    //this.menuCtrl.enable(true);
    this.menuCtrl.enable(true, 'menu');
  }*/

  continue () {
    this.profileService.setTutorial(true).then(ok => {
      this.router.navigateByUrl('/home/timeline');
      this.menuCtrl.enable(true, 'menu');

    }, error => {
      console.log(error);
    });

  }


}