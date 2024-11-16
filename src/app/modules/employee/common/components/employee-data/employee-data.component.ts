import { Component, Input } from '@angular/core';
import { IEmployee, IVacations } from '../../../../../common/interfaces';

@Component({
  selector: 'ntt-data-employee-data-ui',
  templateUrl: './employee-data.component.html',
})
export class EmployeeDataComponent {
  @Input() public vacations!: IVacations | null;
  @Input() public employee!: IEmployee | null;
}
