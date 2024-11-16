import { Injectable } from '@angular/core';
import { LocalStateManagerService } from '../../../../../../../../common/providers/services/local-state-manager.service';
import { IEmployee, IVacations } from '../../../../../../../../common/interfaces';

@Injectable()
export class EmployeeDataAdapter {
  public constructor(private readonly localStateManagerService: LocalStateManagerService) {}

  public solveGetEmployee(): [IEmployee | null, IVacations | null] {
    const employee: IEmployee | null = this.localStateManagerService.solveGetState<IEmployee | null>('employee');
    if (employee) {
      const vacations: IVacations | null = employee?.vacaciones;
      return [employee, vacations];
    }
    return [null, null];
  }
}
