import { Component } from '@angular/core';
import { NoLaboralDaysAdapter } from './common/providers/adapters/no-laboral-days.adapter';
import { ITableComplexData } from '../../../../../common/components/table-complex/common/interfaces';
import { IDashboardUser } from '../../../../employee/common/components/employee-data/common/components/employee-info/common/interfaces';
import { NoLaboralDaysTableService } from './common/providers/services/no-laboral-days-table.service';

@Component({
  selector: 'ntt-data-no-laboral-days',
  templateUrl: './no-laboral-days.container.html',
  providers: [NoLaboralDaysAdapter, NoLaboralDaysTableService],
})
export class NoLaboralDaysContainer {
  public dataTable: ITableComplexData<IDashboardUser>;
  public constructor(public readonly noLaboralDaysAdapter: NoLaboralDaysAdapter) {
    this.dataTable = this.noLaboralDaysAdapter.solveDefaultDataTable();
  }
}
