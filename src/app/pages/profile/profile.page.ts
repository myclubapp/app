import { Component, OnInit, AfterViewInit } from "@angular/core";
import { combineLatest, Observable, of } from "rxjs";

// import firebase from 'firebase/compat/app';
import { User } from "@angular/fire/auth";

// Services
import { FirebaseService } from "src/app/services/firebase.service";
import { AuthService } from "src/app/services/auth.service";

// models
import { Profile } from "src/app/models/user";

// Capacitor
import {
  Camera,
  CameraDirection,
  CameraResultType,
  Photo,
} from "@capacitor/camera";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit, AfterViewInit {
  userProfile$: Observable<Profile>;
  clubRequestList: any[] = [];
  teamRequestList: any[] = [];

  constructor(
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly profileService: UserProfileService
  ) {}

  async ngOnInit() {
    this.getClubRequestList();
    this.getTeamRequestList();
  }

  ngAfterViewInit(): void {
    this.getUser();
    // this.getClubList();
    // this.getTeamList();
  }
  getClubRequestList() {
    const request$ = this.authService
      .getUser$()
      .pipe(
        // GET TEAMS
        switchMap((user: User) => this.fbService.getUserClubRequestRefs(user)),
        // Loop Over Teams
        switchMap((allRequests: any) =>
          combineLatest(
            allRequests.map((request) =>
              combineLatest(of(request), this.fbService.getClubRef(request.id))
            )
          )
        )
      )
      .subscribe(async (data: any) => {
        console.log(data);

        const requestListNew = [];
        for (const request of data) {
          const requestDetail = request[1];

          // const detailRef: DocumentReference = request[0].clubRef;
          // const clubData = await this.fbService.getClubRef(requestDetail.id).toPromise();
          requestListNew.push(requestDetail);
        }
        this.clubRequestList = this.clubRequestList.sort(
          (a, b) => Number(a.id) - Number(b.id)
        );
        this.clubRequestList = [...new Set([].concat(...requestListNew))];
        request$.unsubscribe();
      });
  }
  getTeamRequestList() {
    const request$ = this.authService
      .getUser$()
      .pipe(
        // GET TEAMS
        switchMap((user: User) => this.fbService.getUserTeamRequestRefs(user)),
        // Loop Over Teams
        switchMap((allRequests: any) =>
          combineLatest(
            allRequests.map((request) =>
              combineLatest(of(request), this.fbService.getTeamRef(request.id))
            )
          )
        )
      )
      .subscribe(async (data: any) => {
        console.log(data);

        const requestListNew = [];
        for (const request of data) {
          const requestDetail = request[1];

          // const detailRef: DocumentReference = request[0].clubRef;
          // const clubData = await this.fbService.getClubRef(requestDetail.id).toPromise();
          requestListNew.push(requestDetail);
        }
        this.teamRequestList = this.teamRequestList.sort(
          (a, b) => Number(a.id) - Number(b.id)
        );
        this.teamRequestList = [...new Set([].concat(...requestListNew))];
        request$.unsubscribe();
      });
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
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      correctOrientation: true,
      height: 400,
      width: 400,
      direction: CameraDirection.Front,
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.base64String;
    console.log(image);

    const user: User = await this.authService.getUser();
    this.profileService.setUserProfilePicture(user, image);
  }
}
