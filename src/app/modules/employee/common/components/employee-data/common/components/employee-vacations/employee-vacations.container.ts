import { Component, Input } from '@angular/core';
import { IVacations } from '../../../../../../../../common/interfaces';

@Component({
  selector: 'ntt-data-employee-vacations',
  templateUrl: './employee-vacations.container.html',
})
export class EmployeeVacationsContainer {
  @Input() public vacations!: IVacations | null;
}
