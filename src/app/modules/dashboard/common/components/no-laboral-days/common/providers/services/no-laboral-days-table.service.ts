import { Injectable } from '@angular/core';
import { ITableComplexHeader } from '../../../../../../../../common/components/table-complex/common/interfaces';
import { IEmployee } from '../../../../../../../../common/interfaces';
import * as moment from 'moment';
import { IDashboardUser } from '../../../../../interfaces';
import { DashboardUserModel } from '../../models/dashboard-user.model';

@Injectable()
export class NoLaboralDaysTableService {
  public constructor() {
    moment.locale('es');
  }

  public solveHeaders(): Array<ITableComplexHeader<IDashboardUser>> {
    return [
      {
        item: 'dni',
        name: 'DNI',
      },
      {
        item: 'nombres',
        name: 'Nombres',
      },
      {
        item: 'apellidos',
        name: 'Apellidos',
      },
      {
        item: 'squad',
        name: 'Equipo',
      },
      {
        item: 'scrum_master',
        name: 'Scrum Master',
      },
      {
        item: 'lt',
        name: 'Líder Técnico',
      },
      ...this.solveMonthHeaders(3),
    ];
  }

  private solveMonthHeaders(numberOfMonths: number): Array<ITableComplexHeader<IDashboardUser>> {
    const actualMonth: number = moment().month();
    let months: Array<ITableComplexHeader<IDashboardUser>> = [];
    for (let i = 0; i < numberOfMonths; i++) {
      const month = moment()
        .month(actualMonth + i)
        .format('MMMM');
      months.push({
        item: month as keyof IDashboardUser,
        name: month,
      });
    }
    return months;
  }

  public solveBody(employees: Array<IEmployee>): Array<IDashboardUser> {
    return employees.map((employee: IEmployee) => {
      return new DashboardUserModel(employee);
    });
  }
}
