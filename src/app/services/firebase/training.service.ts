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
} from "@angular/fire/firestore";

// import firebase from 'firebase/compat/app';
import { Observable, Observer } from "rxjs";

import { AuthService } from "src/app/services/auth.service";
import { Training } from "src/app/models/training";

@Injectable({
  providedIn: "root",
})
export class TrainingService {
  constructor(
    private firestore: Firestore = inject(Firestore),
    private readonly authService: AuthService
  ) {}

  async setCreateTraining(training: Training) {
    console.log("training");
    const user = await this.authService.getUser();
    return addDoc(
      collection(this.firestore, `userProfile/${user.uid}/trainings`),
      training
    );
  }

  /* TEAM TrainingS */
  getTeamTrainingsRef(teamId: string): Observable<Training[]> {
    // console.log(`Read Team Trainings List Ref ${teamId}`)
    const trainingsRefList = collection(
      this.firestore,
      `teams/${teamId}/trainings`
    );
    const q = query(
      trainingsRefList,
      where(
        "date",
        ">=",
        Timestamp.fromDate(new Date(Date.now() - 1000 * 3600 * 24 * 7))
      )
    ); // heute - 1 Woche
    return collectionData(q, { idField: "id" }) as unknown as Observable<
      Training[]
    >;
  }

  // PAST 20 Entries
  getTeamTrainingsRefPast(teamId: string): Observable<Training[]> {
    // console.log(`Read Team Trainings List Ref ${teamId}`)
    const trainingsRefList = collection(
      this.firestore,
      `teams/${teamId}/trainings`
    );
    const q = query(
      trainingsRefList,
      where(
        "date",
        "<",
        Timestamp.fromDate(new Date(Date.now() - 1000 * 3600 * 24 * 7))
      ),
      limit(20)
    ); // heute - 1 Woche
    return collectionData(q, { idField: "id" }) as unknown as Observable<
      Training[]
    >;
  }

  /* CLUB TrainingS */
  getClubTrainingsRef(clubId: string): Observable<Training> {
    const trainingsRefList = collection(
      this.firestore,
      `club/${clubId}/trainings`
    );
    return collectionData(trainingsRefList, {
      idField: "id",
    }) as unknown as Observable<Training>;
  }

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
    userId: string,
    status: boolean,
    teamId: string,
    trainingId: string
  ) {
    const statusRef = doc(
      this.firestore,
      `teams/${teamId}/trainings/${trainingId}/attendees/${userId}`
    );
    return await setDoc(statusRef, { status });
  }
}
