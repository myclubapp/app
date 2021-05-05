import {ProfileService} from './user/profile.service';
import {Injectable} from '@angular/core';
import {AngularFireMessaging} from '@angular/fire/messaging';
import 'firebase/messaging';

@Injectable({
  providedIn: 'root',
})
export class PushNotificationService {
  pushNotificationToken: string = null;
  constructor(private messaging: AngularFireMessaging, private profileService: ProfileService) //private profileService: ProfileService

  {}

  requestPermission() {
    this.messaging.requestToken.subscribe(
      (token) => {
        //this.profileService.updatePushToken(token);

        this.profileService.getUserProfile().then((userProfileSnapshot) => {
          if (userProfileSnapshot && userProfileSnapshot.data()) {
            this.profileService.updatePushToken(token);
          }
        });

        this.pushNotificationToken = token;
        //console.log("push token: "  + token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }
  receiveMessage() {
    this.messaging.messages.subscribe((payload: any) => {
      console.log('new message received. ', payload);
      alert('message received');
      // window.location = payload.fcmOptions.link;
    });
  }
}
