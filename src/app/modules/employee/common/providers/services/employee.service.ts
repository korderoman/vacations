import { doc, DocumentReference, DocumentSnapshot, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { ECollections } from '../../../../../common/enums';
import { IEmployee, IEmployeeFirebase, IVacations } from '../../../../../common/interfaces';
import { IEmployeeSearchRequest } from '../../components/employee-search/common/interfaces';
import { IEmployeeInfo } from '../../components/employee-data/common/components/employee-info/common/interfaces';
import { concatMap, from, lastValueFrom, Observable } from 'rxjs';
import { TNonNullableValues } from '../../../../../common/types';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  public constructor(private readonly firestore: Firestore) {}

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

  public async solveSaveAllEmployeeData(employeeInfo: Partial<IEmployeeInfo>, vacations: IVacations): Promise<void> {
    const response: Observable<boolean> = from(this.solveSaveVacations(vacations)).pipe(
      concatMap((vacationsRef: DocumentReference): Observable<boolean> => from(this.solveSaveEmployee(vacationsRef, employeeInfo))),
    );
    await lastValueFrom(response);
  }
  private async solveSaveEmployee(vacationsRef: DocumentReference, employeeInfo: Partial<IEmployeeInfo>): Promise<boolean> {
    try {
      const employeeData = employeeInfo as TNonNullableValues<IEmployeeInfo>;
      const dataToSend: IEmployeeFirebase = {
        ...employeeData,
        vacaciones: vacationsRef,
      };
      console.log('dataToSend', dataToSend);
      //const employeeExists: boolean = await this.solveCheckIfEmployeeExistsByDni(employeeData.dni);
      const employeeRef: DocumentReference = doc(this.firestore, `${ECollections.EMPLOYEES}/${employeeData.dni}`);
      await setDoc(employeeRef, dataToSend);
      return true;
    } catch (e: unknown) {
      console.error(e);
      return false;
    }
  }

  private async solveCheckIfEmployeeExistsByDni(dni?: string | null): Promise<boolean> {
    if (dni) {
      const documentRef: DocumentReference = doc(this.firestore, `${ECollections.EMPLOYEES}/${dni}`);
      const documentSnapshot: DocumentSnapshot = await getDoc(documentRef);
      return !!documentSnapshot.exists();
    }
    return false;
  }

  private async solveSaveVacations(vacations: IVacations): Promise<DocumentReference> {
    const vacationsRef: DocumentReference = doc(this.firestore, `${ECollections.VACATIONS}/${vacations.dni}`);
    await setDoc(vacationsRef, { ...vacations });
    return vacationsRef;
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
}
