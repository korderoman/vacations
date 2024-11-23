import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEmployee, IVacations } from '../../../../../common/interfaces';
import { EmployeeDataPresenter } from './employee-data.presenter';
import { IEmployeeData } from './common/interfaces';

@Component({
  selector: 'ntt-data-employee-data-ui',
  templateUrl: './employee-data.component.html',
  providers: [EmployeeDataPresenter],
})
export class EmployeeDataComponent {
  @Input() public vacations!: IVacations | null;
  @Input() public employee!: IEmployee | null;
  @Output() public sendData: EventEmitter<Partial<IEmployeeData>>;
  public constructor(public readonly employeeDataPresenter: EmployeeDataPresenter) {
    this.sendData = new EventEmitter<Partial<IEmployeeData>>();
  }

  public onSendData(): void {
    if (this.employeeDataPresenter.form.valid) {
      this.sendData.emit(this.employeeDataPresenter.form.value as Partial<IEmployeeData>);
    }
  }
}
