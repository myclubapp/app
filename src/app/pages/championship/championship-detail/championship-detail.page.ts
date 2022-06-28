import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Game } from 'src/app/models/game';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-championship-detail',
  templateUrl: './championship-detail.page.html',
  styleUrls: ['./championship-detail.page.scss'],
})
export class ChampionshipDetailPage implements OnInit {
  @Input("data") game: Game;
  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;

  constructor(private modalCtrl: ModalController,
    public navParams : NavParams) {}
  ngOnInit() {
    this.game = this.navParams.get('data');
    this.setMap();
  }
  close() {
    return this.modalCtrl.dismiss(null, 'close');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.game, 'confirm');
  }

  async setMap(){
    const apiKey = 'AIzaSyAM5x9P0syj9qtxUmFs98nW0B967xo52Fw';

    const mapRef = document.getElementById('map');
    console.log(Number(this.game.latitude));
    console.log(Number(this.game.longitude));
    
    this.newMap = await GoogleMap.create({
      id: 'my-map-' + this.game.id, // Unique identifier for this map instance
      element: mapRef, // reference to the capacitor-google-map element
      apiKey: apiKey, // Your Google Maps API Key
      config: {
        center: {
          // The initial position to be rendered by the map
          lat: Number(this.game.latitude),
          lng: Number(this.game.longitude),
        },
        zoom: 8, // The initial zoom level to be rendered by the map
      },
    });
    this.newMap.addMarker({title: this.game.description,coordinate:{
      lat: Number(this.game.latitude),
          lng: Number(this.game.longitude),
    }});

    const coordinates = await Geolocation.getCurrentPosition();
    this.newMap.addMarker({title: 'Meine Position', coordinate: {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude
    }});



  }
  ngOnDestroy(){

    this.newMap.destroy();
  }


}
