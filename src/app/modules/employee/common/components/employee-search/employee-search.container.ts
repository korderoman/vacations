import { Component } from '@angular/core';
import { IEmployeeSearch, IEmployeeSearchRequest } from './common/interfaces';
import { EmployeeSearchAdapter } from './common/providers/adapters/employee-search.adapter';
import { FirebaseDocsService } from '../../../../../common/providers/services/firebase-docs.service';
import { IEmployee } from '../../../../../common/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'ntt-data-employee-search',
  templateUrl: './employee-search.container.html',
  providers: [EmployeeSearchAdapter, FirebaseDocsService],
})
export class EmployeeSearchContainer {
  public isLoading: boolean;
  public constructor(
    private readonly firebaseDocsService: FirebaseDocsService,
    private readonly employeeSearchAdapter: EmployeeSearchAdapter,
    private readonly router: Router,
  ) {
    this.isLoading = false;
  }
  public async onSearch(form: Partial<IEmployeeSearch>): Promise<void> {
    try {
      this.isLoading = true;
      const searchRequest: IEmployeeSearchRequest = this.employeeSearchAdapter.solveSearchRequest(form);
      const searchResponse: IEmployee | null = await this.firebaseDocsService.searchEmployeeByDni(searchRequest);
      this.employeeSearchAdapter.saveEmployeeInState(searchResponse);
      await this.router.navigate(['/employee/data']);
    } catch (e: unknown) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }
}
