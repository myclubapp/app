import {  Component,  OnInit,  AfterViewInit} from '@angular/core';
import {  Observable} from 'rxjs';

// import firebase from 'firebase/compat/app';
import {  User} from "@angular/fire/auth";

//Services
import {FirebaseService} from 'src/app/services/firebase.service';
import {AuthService} from 'src/app/services/auth.service';

//models
import {  UserProfile} from 'src/app/models/user';

// Capacitor
import { Camera, CameraResultType, Photo } from '@capacitor/camera';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, AfterViewInit {

  userProfile$: Observable < UserProfile > ;
  constructor(
    private authService: AuthService,
    private fbService: FirebaseService
  ) {}

  async ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.getUser();
  }

  async getUser() {
    const user: User = await this.authService.getUser();
    this.userProfile$ = this.fbService.getUserProfile(user);
  }

  async takePicture() {
    const image: Photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.base64String;

    // Can be set to the src of an image now
    // imageElement.src = imageUrl;

    console.log(image);

    const user: User = await this.authService.getUser();
    this.fbService.setUserProfilePicture(user, image);
  };

}
