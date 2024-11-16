import { IEmployee } from './employee.interface';
import { DocumentReference } from '@angular/fire/firestore';

export interface IEmployeeFirebase extends Omit<IEmployee, 'vacaciones'> {
  vacaciones: DocumentReference;
}
