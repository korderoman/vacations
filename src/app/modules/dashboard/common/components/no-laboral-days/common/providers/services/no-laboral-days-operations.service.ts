import { Injectable } from '@angular/core';
import {
  collection,
  CollectionReference,
  Firestore,
  getDocs,
  QuerySnapshot,
  DocumentData,
  getDoc,
  DocumentSnapshot,
} from '@angular/fire/firestore';
import { IEmployee, IEmployeeFirebase, IVacations } from '../../../../../../../../common/interfaces';
import { ECollections } from '../../../../../../../../common/enums';
import { concatMap, from, lastValueFrom, Observable } from 'rxjs';

@Injectable()
export class NoLaboralDaysOperationsService {
  public constructor(private readonly firestore: Firestore) {}

  private async solveGetEmployees(): Promise<Array<IEmployeeFirebase>> {
    const employeesCollection: CollectionReference = collection(this.firestore, ECollections.EMPLOYEES);
    const employeesSnapshot: QuerySnapshot = await getDocs(employeesCollection);
    return employeesSnapshot.docs.map((doc) => {
      const data: DocumentData = doc.data();
      return { ...data } as IEmployeeFirebase;
    });
  }

  private async solveGetVacationsByEmployeeId(employees: Array<IEmployeeFirebase>): Promise<Array<IEmployee>> {
    const employeesWithVacations: Array<Promise<IEmployee>> = employees.map(async (employee: IEmployeeFirebase): Promise<IEmployee> => {
      const vacationSnapShot: DocumentSnapshot = await getDoc(employee.vacaciones);
      const vacation = vacationSnapShot.data() as IVacations | null;
      return { ...employee, vacaciones: vacation ?? null } as IEmployee;
    });
    return Promise.all(employeesWithVacations);
  }

  public async solveGetNoLaboralDaysData(): Promise<Array<IEmployee>> {
    const response: Observable<Array<IEmployee>> = from(this.solveGetEmployees()).pipe(
      concatMap((employees: Array<IEmployeeFirebase>): Observable<Array<IEmployee>> => from(this.solveGetVacationsByEmployeeId(employees))),
    );

    return lastValueFrom<Array<IEmployee>>(response);
  }
}
