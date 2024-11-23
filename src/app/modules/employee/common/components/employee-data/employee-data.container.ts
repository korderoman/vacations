import { Component } from '@angular/core';
import { EmployeeDataAdapter } from './common/providers/adapters/employee-data.adapter';
import { IEmployee, IVacations } from '../../../../../common/interfaces';
import { IEmployeeData } from './common/interfaces';

@Component({
  selector: 'ntt-data-employee-data',
  templateUrl: './employee-data.container.html',
  providers: [EmployeeDataAdapter],
})
export class EmployeeDataContainer {
  public vacations: IVacations | null;
  public employee: IEmployee | null;
  public constructor(private readonly employeeDataAdapter: EmployeeDataAdapter) {
    [this.employee, this.vacations] = this.employeeDataAdapter.solveGetEmployee();
  }

  public onSendData(form: Partial<IEmployeeData>): void {
    console.log('form', form);
  }
}
