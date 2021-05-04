import { Component } from '@angular/core';
import firebase from 'firebase';
import { firebaseConfig } from './credentials';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {

    firebase.initializeApp(firebaseConfig);

  }
}
