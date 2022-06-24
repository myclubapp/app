import {  Component,  OnInit,  AfterViewInit} from '@angular/core';
import {  Observable} from 'rxjs';

// import firebase from 'firebase/compat/app';
import {  User} from "@angular/fire/auth";

//Services
import {FirebaseService} from 'src/app/services/firebase.service';
import {AuthService} from 'src/app/services/auth.service';

//models
import {Profile} from 'src/app/models/user';

// Capacitor
import { Camera, CameraResultType, Photo } from '@capacitor/camera';
import { Club } from 'src/app/models/club';
import { Team } from 'src/app/models/team';
import { UserProfileService } from 'src/app/services/firebase/user-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, AfterViewInit {

  userProfile$: Observable < Profile > ;
  // clubList$: Observable < Club > ;
  // teamList$: Observable < Team > ;
  constructor(
    private authService: AuthService,
    private fbService: FirebaseService,
    private profileService: UserProfileService
  ) {}

  async ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.getUser();
    this.getClubList();
    this.getTeamList();
  }
/* 
  async getClubList(){
    const user: User = await this.authService.getUser();
    // this.clubList$ = 
    this.clubList$ = this.fbService.getClubRefs(user);
  }
  
  async getTeamList(){
    const user: User = await this.authService.getUser();
    this.teamList$ = this.fbService.getTeamRefs(user);
  }
*/
  async getUser() {
    const user: User = await this.authService.getUser();
    this.userProfile$ = this.profileService.getUserProfile(user);
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
    this.profileService.setUserProfilePicture(user, image);
  };

}
