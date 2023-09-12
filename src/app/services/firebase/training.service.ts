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
import { Observable, Observer, Subscription, catchError, concatMap, defaultIfEmpty, finalize, forkJoin, from, map, of, switchMap, take, tap } from "rxjs";

import { AuthService } from "src/app/services/auth.service";
import { Training } from "src/app/models/training";
import { User } from "firebase/auth";
import { FirebaseService } from "../firebase.service";
import { Team } from "src/app/models/team";

@Injectable({
  providedIn: "root",
})
export class TrainingService {
  private subscription: Subscription;

  teamList: any[] = [];
  constructor(
    private firestore: Firestore = inject(Firestore),
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
  ) {

  }
  ngOnInit() {
    let  teamList: any[] = [];
  const teams$ = this.authService.getUser$().pipe(
    take(1),
    switchMap(user => this.fbService.getUserTeamRefs(user).pipe(take(1))),
    concatMap(teamsArray =>  from(teamsArray)),
    tap((team:Team)=>console.log(team.id)),
    concatMap(team => 
      this.fbService.getTeamRef(team.id).pipe(
        take(1),
        defaultIfEmpty(null),  // gibt null zurück, wenn kein Wert von getClubRef gesendet wird
        map(result => [result]),
        catchError(error => {
          console.error('Error fetching TeamDetail:', error);
          return of([]);
      })
    )
    ),
    tap(teamList => teamList.forEach(team => teamList.push(team))),
    finalize(() => console.log("Get Teams completed"))
  );

  this.subscription = forkJoin([teams$]).subscribe({
    next: () => {
      console.log(this.teamList);
    },
    error: err => console.error('Error in the observable chain:', err)
  });

  }

  ngOnDestroy(): void {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
  }



  async setCreateTraining(training: Training, user: User) {
    console.log("training");
    return addDoc(
      collection(this.firestore, `userProfile/${user.uid}/trainings`),
      training
    );
  }

  /* TEAM TrainingS */
  getTeamTrainingsRefs(teamId: string): Observable<Training[]> {
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
  getTeamTrainingsPastRefs(teamId: string): Observable<Training[]> {
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
