import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';

import { Storage, ref, uploadString, getDownloadURL } from '@angular/fire/storage';

// import firebase from 'firebase/compat/app';
import { Observable, Observer } from 'rxjs';


import {AuthService} from 'src/app/services/auth.service';
import { Training } from 'src/app/models/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(
    private firestore: Firestore,
    private storage: Storage,
    private authService: AuthService,
  ) {


   }

   getTrainings(teamId: string): Observable<Training> {
    const trainingRefList = collection(this.firestore, `teams/${teamId}/trainingList`);
    return collectionData(trainingRefList, { idField: 'id' }) as unknown as Observable<Training>;
  }

}
