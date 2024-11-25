import { Component, Input } from '@angular/core';
import { NoLaboralDaysPresenter } from './no-laboral-days.presenter';
import { ITableComplexData } from '../../../../../common/components/table-complex/common/interfaces';
import { IDashboardUser } from '../../../../employee/common/components/employee-data/common/components/employee-info/common/interfaces';

@Component({
  selector: 'ntt-data-no-laboral-days-ui',
  templateUrl: './no-laboral-days.component.html',
  providers: [NoLaboralDaysPresenter],
})
export class NoLaboralDaysComponent {
  @Input() public dataTable!: ITableComplexData<IDashboardUser>;
  public constructor(public readonly noLaboralDaysPresenter: NoLaboralDaysPresenter) {}
}
