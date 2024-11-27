import { Component, OnInit } from '@angular/core';
import { NoLaboralDaysAdapter } from './common/providers/adapters/no-laboral-days.adapter';
import { ITableComplexData } from '../../../../../common/components/table-complex/common/interfaces';
import { NoLaboralDaysTableService } from './common/providers/services/no-laboral-days-table.service';
import { NoLaboralDaysOperationsService } from './common/providers/services/no-laboral-days-operations.service';
import { IEmployee } from '../../../../../common/interfaces';
import { IDashboardUser } from '../../interfaces';
import { INoLaboralDays } from './common/interfaces';

@Component({
  selector: 'ntt-data-no-laboral-days',
  templateUrl: './no-laboral-days.container.html',
  providers: [NoLaboralDaysAdapter, NoLaboralDaysTableService, NoLaboralDaysOperationsService],
})
export class NoLaboralDaysContainer implements OnInit {
  public dataTable: ITableComplexData<IDashboardUser> | null;
  public constructor(
    private readonly operations: NoLaboralDaysOperationsService,
    public readonly noLaboralDaysAdapter: NoLaboralDaysAdapter,
  ) {
    this.dataTable = null;
  }

  public async ngOnInit(): Promise<void> {
    await this.solveDefaultDataTable();
  }
  public async onSearchEmployees(formData: Partial<INoLaboralDays>): Promise<void> {
    try {
      await this.searchEmployeesWithFirestore(formData);
    } catch (e) {
      console.error(e);
    }
  }

  private async searchEmployeesWithFirestore(formData: Partial<INoLaboralDays>): Promise<void> {
    const response: Array<IEmployee> = await this.operations.solveFindEmployeesBySearchInputs(formData);
    this.dataTable = this.noLaboralDaysAdapter.solveFindEmployeesByDatesWithFirebase(response, formData);
  }

  private async solveDefaultDataTable(): Promise<void> {
    try {
      const employees: Array<IEmployee> = await this.operations.solveGetNoLaboralDaysData();
      this.dataTable = this.noLaboralDaysAdapter.solveDefaultDataTable(employees);
    } catch (e) {
      console.error(e);
    }
  }
}
