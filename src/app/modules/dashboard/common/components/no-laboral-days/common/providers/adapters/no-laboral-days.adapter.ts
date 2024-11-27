import { Injectable } from '@angular/core';
import { ITableComplexData } from '../../../../../../../../common/components/table-complex/common/interfaces';
import { NoLaboralDaysTableService } from '../services/no-laboral-days-table.service';
import { IEmployee } from '../../../../../../../../common/interfaces';
import { IDashboardUser } from '../../../../../interfaces';
import { INoLaboralDays } from '../../interfaces';

@Injectable()
export class NoLaboralDaysAdapter {
  public constructor(private readonly tableService: NoLaboralDaysTableService) {}
  public solveDefaultDataTable(employees: Array<IEmployee>): ITableComplexData<IDashboardUser> {
    return {
      headers: this.tableService.solveHeadersByDefault(),
      body: this.tableService.solveBodyByDefault(employees),
    };
  }

  public solveFindEmployeesByDatesWithFirebase(
    employees: Array<IEmployee>,
    formData: Partial<INoLaboralDays>,
  ): ITableComplexData<IDashboardUser> {
    return {
      headers: this.tableService.solveHeadersByDates(formData),
      body: this.tableService.solveBodyByDates(employees, formData),
    };
  }
}
