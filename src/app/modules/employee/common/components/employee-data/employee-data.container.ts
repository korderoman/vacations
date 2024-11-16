import { Component, OnInit } from '@angular/core';
import { EmployeeDataAdapter } from './common/providers/adapters/employee-data.adapter';
import { IEmployee, IVacations } from '../../../../../common/interfaces';

@Component({
  selector: 'ntt-data-employee-data',
  templateUrl: './employee-data.container.html',
  providers: [EmployeeDataAdapter],
})
export class EmployeeDataContainer implements OnInit {
  public vacations: IVacations | null;
  public employee: IEmployee | null;
  public constructor(private readonly employeeDataAdapter: EmployeeDataAdapter) {
    this.vacations = null;
    this.employee = null;
  }

  public ngOnInit(): void {
    this.solveEmployeeData();
  }

  private solveEmployeeData(): void {
    [this.employee, this.vacations] = this.employeeDataAdapter.solveGetEmployee();
  }
}
