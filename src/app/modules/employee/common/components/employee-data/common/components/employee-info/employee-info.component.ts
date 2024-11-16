import { Component, Input, OnInit } from '@angular/core';
import { EmployeeInfoPresenter } from './employee-info.presenter';
import { IEmployeeInfo } from './common/interfaces';
import { TStatesName } from '../../../../../../../../common/types';

@Component({
  selector: 'ntt-data-employee-info-ui',
  templateUrl: './employee-info.component.html',
  providers: [EmployeeInfoPresenter],
})
export class EmployeeInfoComponent implements OnInit {
  @Input() public model!: IEmployeeInfo | null;
  public constructor(public readonly employeeInfoPresenter: EmployeeInfoPresenter) {}
  public ngOnInit(): void {
    this.employeeInfoPresenter.updateForm(this.model);
  }
}
