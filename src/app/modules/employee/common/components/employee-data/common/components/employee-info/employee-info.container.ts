import { Component, Input, OnInit } from '@angular/core';
import { IEmployee } from '../../../../../../../../common/interfaces';
import { EmployeeInfoAdapter } from './common/providers/adapters/employee-info.adapter';
import { IEmployeeInfo } from './common/interfaces';

@Component({
  selector: 'ntt-data-employee-info',
  templateUrl: './employee-info.container.html',
  providers: [EmployeeInfoAdapter],
})
export class EmployeeInfoContainer implements OnInit {
  @Input() public employee!: IEmployee | null;
  public model: IEmployeeInfo | null;

  public constructor(private readonly employeeInfoAdapter: EmployeeInfoAdapter) {
    this.model = null;
  }

  public ngOnInit(): void {
    this.solveModel();
  }

  private solveModel(): void {
    this.model = this.employeeInfoAdapter.solveModel(this.employee);
  }
}
