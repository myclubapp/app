import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { collection, doc, query, where } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(
    private readonly firestore: Firestore = inject(Firestore),
  ) { }

  getExerciseRef(): Observable<any> {
    const exercisesRef = doc(this.firestore, `exercises`);
    return docData(exercisesRef, { idField: "id" }) as Observable<any>;
  }

  getExerciseRefs(type: string): Observable<any[]> {
    const exercisesRefList = collection(this.firestore, `exercises`);
    const q = query(
      exercisesRefList,
      where(
        "type",
        ">=",
        type
      )
    )

    return collectionData(q, {
      idField: "id",
    }) as unknown as Observable<any[]>;
  }


  getTeamExerciseRefs(teamId: string): Observable<any[]> {
    const exercisesRefList = collection(this.firestore, `teams/${teamId}/exercises`);
    return collectionData(exercisesRefList, {
      idField: "id",
    }) as unknown as Observable<any[]>;
  }
  getTeamTrainingExerciseRefs(teamId: string, trainingId: string): Observable<any[]> {
    const exercisesRefList = collection(this.firestore, `teams/${teamId}/trainings/${trainingId}/exercises`);
    return collectionData(exercisesRefList, {
      idField: "id",
    }) as unknown as Observable<any[]>;
  }
}
