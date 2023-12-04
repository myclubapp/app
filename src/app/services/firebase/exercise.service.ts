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
    const  exercisesRef = doc(this.firestore, `exercises`);
    return docData(exercisesRef, { idField: "id" }) as Observable<any>;
  }

  getExerciseRefs(): Observable<any[]> {
    const exercisesRefList = collection(this.firestore, `exercises`);
    const q = query(
      exercisesRefList,
      where(
        "type",
        ">=",
        "swissunihockey"
        )
      )
  
    return collectionData(q, {
      idField: "id",
    }) as unknown as Observable<any[]>;
  }
}
