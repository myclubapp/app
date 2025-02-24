import { Injectable, inject } from "@angular/core";
import {
  limit,
  Timestamp,
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  setDoc,
  query,
  where,
  docData,
} from "@angular/fire/firestore";

// import firebase from 'firebase/compat/app';
import {
  Observable,
  Subscription,
} from "rxjs";

import { AuthService } from "src/app/services/auth.service";
import { Training } from "src/app/models/training";
import { FirebaseService } from "../firebase.service";
import { deleteDoc, orderBy } from "firebase/firestore";

@Injectable({
  providedIn: "root",
})
export class TrainingService {
  private subscription: Subscription;

  teamList: any[] = [];
  constructor(
    private firestore: Firestore = inject(Firestore),
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService
  ) {}

  async setCreateTraining(training: Training) {
    const user = this.authService.auth.currentUser;
    // console.log("training");
    // console.log(training);
    return addDoc(
      collection(this.firestore, `userProfile/${user.uid}/trainings`),
      training
    );
  }

  getTeamTrainingRef(teamId: string, trainingId: string): Observable<Training> {
    // console.log(`Read Team Games Attendees List Ref ${teamId} with game ${gameId}`)
    const gameRef = doc(
      this.firestore,
      `teams/${teamId}/trainings/${trainingId}`
    );
    return docData(gameRef, { idField: "id" }) as Observable<Training>;
  }

  /* TEAM TrainingS */
  getTeamTrainingsRefs(teamId: string): Observable<Training[]> {
    console.log(`Read Team Trainings List Ref ${teamId}`)
    const trainingsRefList = collection(
      this.firestore,
      `teams/${teamId}/trainings`
    );
    const q = query(
      trainingsRefList,
      where(
        "date", // date = endDate
        ">=",
        Timestamp.fromDate(new Date(Date.now() - 1000 * 3600  * 1)) // 1 Hour after training ends
      )
      ,orderBy("date", "asc"),
    );
    return collectionData(q, { idField: "id" }) as unknown as Observable<
      Training[]
    >;
  }

  // PAST 20 Entries
  getTeamTrainingsPastRefs(teamId: string): Observable<Training[]> {
    // console.log(`Read Team Trainings List Ref ${teamId}`)
    const trainingsRefList = collection(
      this.firestore,
      `teams/${teamId}/trainings`
    );
    const q = query(
      trainingsRefList,
      where(
        "date", //  date = endDate of training
        "<",
        Timestamp.fromDate(new Date(Date.now())) // sofort als "vergangen" anzeigen
      ),
      orderBy("date", "desc"),
      limit(20) 
    ); 
    return collectionData(q, { idField: "id" }) as unknown as Observable<
      Training[]
    >;
  }

  /* CLUB TrainingS
  getClubTrainingsRef(clubId: string): Observable<Training> {
    const trainingsRefList = collection(
      this.firestore,
      `club/${clubId}/trainings`
    );
    return collectionData(trainingsRefList, {
      idField: "id",
    }) as unknown as Observable<Training>;
  } */

  /* TEAM TrainingS ATTENDEES */
  getTeamTrainingsAttendeesRef(
    teamId: string,
    trainingId: string
  ): Observable<any[]> {
    // console.log(`Read Team Trainings Attendees List Ref ${teamId} with Training ${trainingId}`)
    const attendeesRefList = collection(
      this.firestore,
      `teams/${teamId}/trainings/${trainingId}/attendees`
    );
    return collectionData(attendeesRefList, {
      idField: "id",
    }) as unknown as Observable<any[]>;
  }

  /* TEAM TrainingS ATTENDEE Status */
  async setTeamTrainingAttendeeStatus(
    status: boolean,
    teamId: string,
    trainingId: string
  ) {
    const user = this.authService.auth.currentUser;
    const statusRef = doc(
      this.firestore,
      `teams/${teamId}/trainings/${trainingId}/attendees/${user.uid}`
    );
    return await setDoc(statusRef, { status });
  }

  async setTeamTrainingAttendeeStatusAdmin(
    status: boolean,
    teamId: string,
    trainingId: string,
    memberId: string,
  ) {
    const statusRef = doc(
      this.firestore,
      `teams/${teamId}/trainings/${trainingId}/attendees/${memberId}`
    );
    return await setDoc(statusRef, { status });
  }

  deleteTeamTraining(teamId: string, trainingId: string) {
    const gameRef = doc(
      this.firestore,
      `teams/${teamId}/trainings/${trainingId}`
    );
    return deleteDoc(gameRef);
  }
}
