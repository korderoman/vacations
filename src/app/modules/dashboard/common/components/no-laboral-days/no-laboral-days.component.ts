import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoLaboralDaysPresenter } from './no-laboral-days.presenter';
import { ITableComplexData } from '../../../../../common/components/table-complex/common/interfaces';
import { IDashboardUser } from '../../interfaces';
import { INoLaboralDays } from './common/interfaces';

@Component({
  selector: 'ntt-data-no-laboral-days-ui',
  templateUrl: './no-laboral-days.component.html',
  providers: [NoLaboralDaysPresenter],
})
export class NoLaboralDaysComponent {
  @Input() public dataTable!: ITableComplexData<IDashboardUser> | null;
  @Output() public searchEmployees: EventEmitter<Partial<INoLaboralDays>>;
  public constructor(public readonly noLaboralDaysPresenter: NoLaboralDaysPresenter) {
    this.searchEmployees = new EventEmitter<Partial<INoLaboralDays>>();
  }

  public onSearchEmployees(): void {
    this.searchEmployees.emit(this.noLaboralDaysPresenter.form.value);
  }
}
