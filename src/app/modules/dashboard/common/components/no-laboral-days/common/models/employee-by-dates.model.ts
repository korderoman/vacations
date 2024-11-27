import { IEmployee, IVacations, IVacationsDates } from '../../../../../../../common/interfaces';
import { INoLaboralDays } from '../interfaces';
import * as moment from 'moment';

export class EmployeeByDatesModel {
  public constructor() {
    moment.locale('es');
  }
  public solveFilterEmployeesByDate(employees: Array<IEmployee>, formData: Partial<INoLaboralDays>): Array<IEmployee> {
    const employeesFiltered: Array<IEmployee> = employees.filter((employee: IEmployee): boolean =>
      this.solveEmployeeByDate(employee, formData),
    );
    return employeesFiltered;
  }

  private solveEmployeeByDate(employee: IEmployee, formData: Partial<INoLaboralDays>): boolean {
    const vacations: IVacations | null = employee.vacaciones;
    if (vacations && vacations.vacaciones.fechas.length > 0) {
      const dates: Array<IVacationsDates> = vacations.vacaciones.fechas;
      const datesFiltered: Array<IVacationsDates> = dates.filter((date: IVacationsDates): boolean =>
        this.solveFilterDatesByFormData(date, formData),
      );
      return datesFiltered.length > 0;
    }
    return false;
  }

  private solveFilterDatesByFormData(date: IVacationsDates, formData: Partial<INoLaboralDays>): boolean {
    const startMonth: string = formData.startDate!;
    const endMonth: string = formData.endDate!;
    const momentStartMonth = moment(startMonth, 'YYYY-MM-DD', true);
    const momentEndMonth = moment(endMonth, 'YYYY-MM-DD', true);
    const momentStartVacation = moment(date.fecha_inicio, 'YYYY-MM-DD', true);
    const momentEndVacation = moment(date.fecha_fin, 'YYYY-MM-DD', true);
    if (momentStartVacation.isSameOrAfter(momentStartMonth) && momentEndVacation.isSameOrBefore(momentEndMonth)) {
      return true;
    }
    return false;
  }
}
