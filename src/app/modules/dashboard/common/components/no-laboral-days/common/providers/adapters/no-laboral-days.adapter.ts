import { Injectable } from '@angular/core';
import { ITableComplexData } from '../../../../../../../../common/components/table-complex/common/interfaces';
import { NoLaboralDaysTableService } from '../services/no-laboral-days-table.service';
import { IEmployee } from '../../../../../../../../common/interfaces';
import { IDashboardUser } from '../../../../../interfaces';

@Injectable()
export class NoLaboralDaysAdapter {
  public constructor(private readonly tableService: NoLaboralDaysTableService) {}
  public solveDefaultDataTable(employees: Array<IEmployee>): ITableComplexData<IDashboardUser> {
    console.log(employees);
    return {
      headers: this.tableService.solveHeaders(),
      body: this.tableService.solveBody(employees),
    };
  }
}
