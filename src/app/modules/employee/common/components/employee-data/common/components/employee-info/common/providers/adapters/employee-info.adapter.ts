import { Injectable } from '@angular/core';
import { IEmployeeInfo } from '../../interfaces';
import { IEmployee } from '../../../../../../../../../../../common/interfaces';
import { EmployeeInfoModel } from '../../models/employee-info.model';
import { LocalStateManagerService } from '../../../../../../../../../../../common/providers/services/local-state-manager.service';

@Injectable()
export class EmployeeInfoAdapter {
  public constructor(private readonly localStatesManager: LocalStateManagerService) {}

  public solveModel(employee: IEmployee | null): IEmployeeInfo {
    return new EmployeeInfoModel(employee);
  }
}
