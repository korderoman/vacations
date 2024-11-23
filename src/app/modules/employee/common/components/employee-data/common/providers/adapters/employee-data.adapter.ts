import { Injectable } from '@angular/core';
import { LocalStateManagerService } from '../../../../../../../../common/providers/services/local-state-manager.service';
import { IEmployee, IVacations, IVacationsData } from '../../../../../../../../common/interfaces';
import { IEmployeeData } from '../../interfaces';
import { IEmployeeInfo } from '../../components/employee-info/common/interfaces';
import { IAddVacation } from '../../components/employee-vacations/common/interfaces';
import { VacationsModel } from '../../../models/vacations.model';

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

  public solveSaveEmployeeRequestInFireStore(formData: Partial<IEmployeeData>): [Partial<IEmployeeInfo>, IVacations] {
    const employeeInfo: Partial<IEmployeeInfo> = formData.employeeInfo as unknown as Partial<IEmployeeInfo>;
    const vacations: IVacations = new VacationsModel(formData);
    return [employeeInfo, vacations];
  }
}
