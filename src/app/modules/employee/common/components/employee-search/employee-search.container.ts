import { Component } from '@angular/core';
import { IEmployeeSearch, IEmployeeSearchRequest } from './common/interfaces';
import { EmployeeSearchAdapter } from './common/providers/adapters/employee-search.adapter';
import { IEmployee } from '../../../../../common/interfaces';
import { Router } from '@angular/router';
import { EmployeeService } from '../../providers/services/employee.service';

@Component({
  selector: 'ntt-data-employee-search',
  templateUrl: './employee-search.container.html',
  providers: [EmployeeSearchAdapter, EmployeeService],
})
export class EmployeeSearchContainer {
  public isLoading: boolean;
  public constructor(
    private readonly employeeService: EmployeeService,
    private readonly employeeSearchAdapter: EmployeeSearchAdapter,
    private readonly router: Router,
  ) {
    this.isLoading = false;
  }
  public async onSearch(form: Partial<IEmployeeSearch>): Promise<void> {
    try {
      this.isLoading = true;
      const searchRequest: IEmployeeSearchRequest = this.employeeSearchAdapter.solveSearchRequest(form);
      const searchResponse: IEmployee | null = await this.employeeService.searchEmployeeByDni(searchRequest);
      this.employeeSearchAdapter.saveEmployeeInState(searchResponse);
      await this.router.navigate(['/employee/data']);
    } catch (e: unknown) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }
}
