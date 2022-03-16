import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// import firebase from 'firebase/compat/app';
import {
  User
} from "@angular/fire/auth";

//Services
import { FirebaseService } from 'src/app/services/firebase.service';
import { AuthService } from 'src/app/services/auth.service';

//models
import { UserProfile } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userProfile$: Observable<UserProfile>;
  constructor(
    private authService: AuthService,
    private fbService: FirebaseService
  ) { }

  async ngOnInit() {
    const user: User = await this.authService.getUser();
    this.userProfile$ = this.fbService.getUserProfile(user);   
  }

}
