import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { collection, deleteDoc, doc, orderBy, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(
    private readonly firestore: Firestore,
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
        "==",
        type
      )
    )

    return collectionData(q, {
      idField: "id",
    }) as Observable<any[]>;
  }


  getTeamExerciseRefs(teamId: string): Observable<any[]> {
    const exercisesRefList = collection(this.firestore, `teams/${teamId}/exercises`);

    return collectionData(exercisesRefList, {
      idField: "id",
    }) as Observable<any[]>;
  }
  getTeamTrainingExerciseRefs(teamId: string, trainingId: string): Observable<any[]> {
    const exercisesRefList = collection(this.firestore, `teams/${teamId}/trainings/${trainingId}/exercises`);
    const q = query(
      exercisesRefList,
      orderBy(
        "order",
        "asc"
      )
    )
    return collectionData(q, {
      idField: "id",
    }) as Observable<any[]>;
  }

  addTeamTrainingExercise(teamId, trainingId, exercise) {
    // console.log(teamId, trainingId, exercise.id)
    return setDoc(
      doc(this.firestore, `teams/${teamId}/trainings/${trainingId}/exercises/${exercise.id}`),
      exercise
    );
  }
  addTeamExercise(teamId, exercise) {
    return setDoc(
      doc(this.firestore, `teams/${teamId}/exercises/${exercise.id}`),
      exercise
    );
  }
  removeTeamTrainingExercise(teamId, trainingId, exercise) {
    const exercisesRef = doc(this.firestore, `teams/${teamId}/trainings/${trainingId}/exercises/${exercise.id}`);
    return deleteDoc(exercisesRef);
  }
  removeTeamExercise(teamId, exercise) {
    const exercisesRef = doc(this.firestore, `teams/${teamId}/exercises/${exercise.id}`);
    return deleteDoc(exercisesRef);
  }

  updateTeamTrainingExerciseOrder(teamId, trainingId, exerciseId, order) {
    const exerciseRef = doc(this.firestore, `teams/${teamId}/trainings/${trainingId}/exercises/${exerciseId}`);
    return updateDoc(exerciseRef, { order: order });
  }

}
