import { Injectable } from '@angular/core';
import { ITableComplexHeader } from '../../../../../../../../common/components/table-complex/common/interfaces';
import { IEmployee } from '../../../../../../../../common/interfaces';
import * as moment from 'moment';
import { IDashboardUser } from '../../../../../interfaces';
import { INoLaboralDays } from '../../interfaces';
import { EMonthNames } from '../../enums';
import { EmployeeByDatesModel, DashboardUserModel } from '../../models';

@Injectable()
export class NoLaboralDaysTableService {
  private employeeByDates: EmployeeByDatesModel;
  public constructor() {
    moment.locale('es');
    this.employeeByDates = new EmployeeByDatesModel();
  }

  public solveHeadersByDefault(): Array<ITableComplexHeader<IDashboardUser>> {
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
      ...this.solveMonthHeadersByDefault(3),
    ];
  }

  public solveHeadersByDates(formData: Partial<INoLaboralDays>): Array<ITableComplexHeader<IDashboardUser>> {
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
      ...this.solveMonthHeadersByDates(formData),
    ];
  }

  private solveMonthHeadersByDefault(numberOfMonths: number): Array<ITableComplexHeader<IDashboardUser>> {
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

  private solveMonthHeadersByDates(formData: Partial<INoLaboralDays>): Array<ITableComplexHeader<IDashboardUser>> {
    let months: Array<ITableComplexHeader<IDashboardUser>> = [];
    const startMonth: string = formData.startDate!;
    const endMonth: string = formData.endDate!;
    const momentStartMonth = moment(startMonth, 'YYYY-MM-DD', true);
    const momentEndMonth = moment(endMonth, 'YYYY-MM-DD', true);
    while (momentStartMonth.isSameOrBefore(momentEndMonth, 'month')) {
      const monthLabel = momentStartMonth.format('MMMM');
      months.push({ item: monthLabel as EMonthNames, name: monthLabel });
      momentStartMonth.add(1, 'month');
    }

    return months;
  }

  public solveBodyByDefault(employees: Array<IEmployee>): Array<IDashboardUser> {
    return employees.map((employee: IEmployee) => {
      return new DashboardUserModel(employee);
    });
  }
  public solveBodyByDates(employees: Array<IEmployee>, formData: Partial<INoLaboralDays>): Array<IDashboardUser> {
    const employeesFiltered: Array<IEmployee> = this.employeeByDates.solveFilterEmployeesByDate(employees, formData);
    return employeesFiltered.map((employee: IEmployee) => {
      return new DashboardUserModel(employee);
    });
  }
}
