import { Injectable } from '@angular/core';
import { collection, CollectionReference, Firestore, getDocs, QuerySnapshot } from '@angular/fire/firestore';
import { IParameter, IParametersFirebase } from '../../interfaces';
import { forkJoin, lastValueFrom, Observable } from 'rxjs';
import { ECollections } from '../../enums';

@Injectable({
  providedIn: 'root',
})
export class ParametersService {
  public constructor(private readonly firestore: Firestore) {}

  public async solveGetParameters(): Promise<IParametersFirebase> {
    const response: Observable<IParametersFirebase> = forkJoin({
      technicalLeaders: this.solveGetTechnicalLeader(),
      scrumMasters: this.solveGetScrumMaster(),
      squads: this.solveGetSquads(),
      roles: this.solveGetPerfil(),
    });
    return lastValueFrom<IParametersFirebase>(response);
  }

  private async solveGetTechnicalLeader(): Promise<Array<IParameter>> {
    try {
      const collectionRef: CollectionReference = collection(this.firestore, ECollections.TECHNICAL_LEADERS);
      const snapshot: QuerySnapshot = await getDocs(collectionRef);
      return snapshot.docs.map((doc) => {
        const data = doc.data() as IParameter;
        return data;
      });
    } catch (e) {
      console.error(e);
      return [];
    }
  }
  private async solveGetScrumMaster(): Promise<Array<IParameter>> {
    try {
      const collectionRef: CollectionReference = collection(this.firestore, ECollections.SCRUM_MASTERS);
      const snapshot: QuerySnapshot = await getDocs(collectionRef);
      return snapshot.docs.map((doc) => {
        const data = doc.data() as IParameter;
        return data;
      });
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  private async solveGetSquads(): Promise<Array<IParameter>> {
    try {
      const collectionRef: CollectionReference = collection(this.firestore, ECollections.SQUADS);
      const snapshot: QuerySnapshot = await getDocs(collectionRef);
      return snapshot.docs.map((doc) => {
        const data = doc.data() as IParameter;
        return data;
      });
    } catch (e: unknown) {
      console.error(e);
      return [];
    }
  }

  private async solveGetPerfil(): Promise<Array<IParameter>> {
    try {
      const collectionRef: CollectionReference = collection(this.firestore, ECollections.PERFIL);
      const snapshot: QuerySnapshot = await getDocs(collectionRef);
      return snapshot.docs.map((doc) => {
        const data = doc.data() as IParameter;
        return data;
      });
    } catch (e: unknown) {
      console.error(e);
      return [];
    }
  }
}
