import {
  UnihockeyService
} from './../../services/verband/unihockey.service';
import {
  ChampionshipService
} from './../../services/championship/championship.service';
import {
  ModalController,
  NavParams,
  ToastController
} from '@ionic/angular';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Plugins,
  GeolocationPosition,
  Browser
} from '@capacitor/core';


const {
  Geolocation
} = Plugins;


@Component({
  selector: 'app-championship-detail',
  templateUrl: './championship-detail.page.html',
  styleUrls: ['./championship-detail.page.scss'],
})
export class ChampionshipDetailPage implements OnInit {
  public markers: any;
  public apiKey: String;
  public options;

  public game: any = {};

  public segment: string = "accept";
  public acceptList: any = [];
  public rejectList: any = [];

  constructor(
    private unihockeyService: UnihockeyService,
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private toastController: ToastController,
    private championshipService: ChampionshipService
  ) {

  }

  async ngOnInit() {
    this.game = this.navParams.get('game');
    this.unihockeyService.getSUGame(this.navParams.get('game').suGameId).subscribe(game => {
      console.log(game);
      this.game = game.data;
    })


    this.championshipService.getAcceptList(this.game).then(list => {
      this.acceptList = list;
    });

    this.championshipService.getRejectList(this.game).then(list => {
      this.rejectList = list;
    });


    Geolocation.requestPermissions().then(async ok => {

      const currentPosition: GeolocationPosition = await this.getCurrentPosition();


      let markers = [];

      if (currentPosition && currentPosition.coords && currentPosition.coords.latitude) {
        markers.push({
          lat: currentPosition.coords.latitude,
          lng: currentPosition.coords.longitude,
          infoWindowOptions: {
            content: "<p>Hier bist du</p>"
          }
        });
      }

      markers.push({
        lat: this.game.locationY,
        lng: this.game.locationX,
        infoWindowOptions: {
          content: '<div class="mygooglemaps" id="content maps">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">' + this.game.sportshall + '</h1>' +
            '<div id="bodyContent">' +
            '<p>' + this.game.sportshall + " in " + this.game.location + '</p>' +
            '<p><a target="_blank" href="https://www.google.com/maps/dir/' + currentPosition.coords.latitude + ',' + currentPosition.coords.longitude + "/" + this.game.locationY + ',' + this.game.locationX + "/" + '"> <span> View on Google Maps </span> </a>' +
            //        '<p><a target="_blank" href="https://maps.google.com/maps?ll=' + this.game.locationY +',' + this.game.locationX + '&amp;z=14&amp;t=m&amp;hl=de-CH&amp;gl=US&amp;mapclient=apiv3&amp&markers=color:red"> <span> View on Google Maps </span> </a>'+
            //'<p><a target="_blank" href="https://maps.google.com/maps?ll=' + this.game.locationY +',' + this.game.locationX + '&amp;z=14&amp;t=m&amp;hl=de-CH&amp;gl=US&amp;mapclient=apiv3&amp&markers=color:red"> <span> View on Google Maps </span> </a>'+
            '</p>' +
            '</div>' +
            '</div>'
        }
      });

      const myMarkers = {
        markers: markers,
        fitBounds: true
      };

      this.options = {
        draggable: true,
        clickableIcons: true,
        zoom: 5
      }
      this.markers = myMarkers;
      this.apiKey = "AIzaSyAIJSiJbPCrS71hy0IyZXeoTdgBb6__wiw";

    }, error => {
      this.toastController.create({
        message: 'Fehler, keine Berechtigung für den aktuellen Standort. Aktion abgebrochen.',
        color: "danger",
        duration: 2000
      }).then(toast => {
        toast.present();
      });

    })





  }

  async getCurrentPosition() {
    return await Geolocation.getCurrentPosition();
  }
  async openMaps() {

    Geolocation.requestPermissions().then(async ok => {

      const currentPosition: GeolocationPosition = await this.getCurrentPosition();
      this.toastController.create({
        message: 'Google Maps wird geöffnet.',
        color: "success",
        duration: 2000
      }).then(toast => {
        toast.present();
      });
      Browser.open({
        "url": 'https://www.google.com/maps/dir/' + currentPosition.coords.latitude + ',' + currentPosition.coords.longitude + "/" + this.game.locationY + ',' + this.game.locationX + "/"
      });

    }, error => {
      this.toastController.create({
        message: 'Fehler, keine Berechtigung für den aktuellen Standort. Aktion abgebrochen.',
        color: "danger",
        duration: 2000
      }).then(toast => {
        toast.present();
      });

    })
  }
  acceptTraining() {
    this.championshipService.acceptGame(this.game.gameId);
  }

  rejectTraining() {
    this.championshipService.rejectGame(this.game.gameId);
  }
  changeSegment(event) {
    //console.log(event.detail.value);
    this.segment = event.detail.value;

  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}