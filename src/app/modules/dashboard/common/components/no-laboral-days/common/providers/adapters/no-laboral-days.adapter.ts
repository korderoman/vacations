import { Injectable } from '@angular/core';
import { ITableComplexData } from '../../../../../../../../common/components/table-complex/common/interfaces';
import { IDashboardUser } from '../../../../../../../employee/common/components/employee-data/common/components/employee-info/common/interfaces';
import { NoLaboralDaysTableService } from '../services/no-laboral-days-table.service';

@Injectable()
export class NoLaboralDaysAdapter {
  public constructor(private readonly tableService: NoLaboralDaysTableService) {}
  public solveDefaultDataTable(): ITableComplexData<IDashboardUser> {
    return {
      headers: this.tableService.solveHeaders(),
      body: [],
    };
  }
}
