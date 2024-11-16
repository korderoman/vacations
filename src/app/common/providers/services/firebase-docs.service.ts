import { Inject, Injectable } from '@angular/core';
import { IEmployee, IEmployeeFirebase, IEnvironment, IParameter, IParametersFirebase, IVacations } from '../../interfaces';
import { ENVIRONMENT_TOKEN } from '../injections';
import {
  Firestore,
  doc,
  getDoc,
  DocumentReference,
  DocumentSnapshot,
  collection,
  getDocs,
  QuerySnapshot,
  CollectionReference,
} from '@angular/fire/firestore';
import { ECollections } from '../../enums';
import { IEmployeeSearchRequest } from '../../../modules/employee/common/components/employee-search/common/interfaces';
import { forkJoin, lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseDocsService {
  public constructor(
    @Inject(ENVIRONMENT_TOKEN) private readonly env: IEnvironment,
    private readonly firestore: Firestore,
  ) {}

  public async searchEmployeeByDni(data: IEmployeeSearchRequest): Promise<IEmployee | null> {
    try {
      const { dni } = data;
      const documentRef: DocumentReference = doc(this.firestore, `${ECollections.EMPLOYEES}/${dni}`);
      const documentSnapshot: DocumentSnapshot = await getDoc(documentRef);
      if (documentSnapshot.exists()) {
        const employeeFirebase = documentSnapshot.data() as IEmployeeFirebase;
        const vacaciones: IVacations | null = await this.solveGetVacationsFromReference(employeeFirebase.vacaciones);
        return {
          ...employeeFirebase,
          vacaciones,
        } as IEmployee;
      }
      console.warn('Documento no encontrado');
      return null;
    } catch (e: unknown) {
      console.error(e);
      return null;
    }
  }

  public async solveGetParameters(): Promise<IParametersFirebase> {
    const response: Observable<IParametersFirebase> = forkJoin({
      technicalLeaders: this.solveGetTechnicalLeader(),
      scrumMasters: this.solveGetScrumMaster(),
      squads: this.solveGetSquads(),
      roles: this.solveGetPerfil(),
    });
    return lastValueFrom<IParametersFirebase>(response);
  }
  private async solveGetVacationsFromReference(employeeReference: DocumentReference): Promise<IVacations | null> {
    try {
      const vacationsSnapShot: DocumentSnapshot = await getDoc(employeeReference);
      if (vacationsSnapShot.exists()) {
        return vacationsSnapShot.data() as IVacations;
      }
      console.warn('No se encuentran vacaciones asociadas al empleado');
      return null;
    } catch (e: unknown) {
      console.error(e);
      return null;
    }
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
