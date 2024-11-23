import { Component } from '@angular/core';
import { EmployeeDataAdapter } from './common/providers/adapters/employee-data.adapter';
import { IEmployee, IVacations } from '../../../../../common/interfaces';
import { IEmployeeData } from './common/interfaces';
import { FirebaseDocsService } from '../../../../../common/providers/services/firebase-docs.service';

@Component({
  selector: 'ntt-data-employee-data',
  templateUrl: './employee-data.container.html',
  providers: [EmployeeDataAdapter],
})
export class EmployeeDataContainer {
  public vacations: IVacations | null;
  public employee: IEmployee | null;
  public constructor(
    private readonly firebaseDocsService: FirebaseDocsService,
    private readonly employeeDataAdapter: EmployeeDataAdapter,
  ) {
    [this.employee, this.vacations] = this.employeeDataAdapter.solveGetEmployee();
  }

  public async onSendData(form: Partial<IEmployeeData>): Promise<void> {
    try {
      const [employeeInfo, vacations] = this.employeeDataAdapter.solveSaveEmployeeRequestInFireStore(form);
      await this.firebaseDocsService.solveSaveAllEmployeeData(employeeInfo, vacations);
    } catch (e) {
      console.error(e);
    }
  }
}
