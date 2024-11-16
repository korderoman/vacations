import { Injectable } from '@angular/core';
import { IEmployeeSearch, IEmployeeSearchRequest } from '../../interfaces';
import { LocalStateManagerService } from '../../../../../../../../common/providers/services/local-state-manager.service';
import { IEmployee } from '../../../../../../../../common/interfaces';

@Injectable()
export class EmployeeSearchAdapter {
  public constructor(private readonly localStateManagerService: LocalStateManagerService) {}
  public solveSearchRequest(form: Partial<IEmployeeSearch>): IEmployeeSearchRequest {
    if (form.dni) {
      return {
        dni: form.dni,
      };
    }
    throw new Error('No se ha encontrado el DNI');
  }

  public saveEmployeeInState(employee: IEmployee | null): void {
    this.localStateManagerService.solveSetState<IEmployee | null>('employee', employee);
  }
}
