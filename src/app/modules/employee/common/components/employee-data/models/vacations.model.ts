import { IVacations, IVacationsData, IVacationsDates } from '../../../../../../common/interfaces';
import { IEmployeeData } from '../common/interfaces';
import { IEmployeeInfo } from '../common/components/employee-info/common/interfaces';
import { IAddVacation } from '../common/components/employee-vacations/common/interfaces';
import { TNonNullableValues } from '../../../../../../common/types';
import * as moment from 'moment';
import { EMonthNames } from '../../../../../dashboard/common/components/no-laboral-days/common/enums';

export class VacationsModel implements IVacations {
  public readonly dni: string;
  public readonly vacaciones: IVacationsData;

  public constructor(formData: Partial<IEmployeeData>) {
    moment.locale('es');
    this.dni = this.solveDni(formData);
    this.vacaciones = this.solveVacaciones(formData);
  }

  private solveGetEmployeeInfo(formData: Partial<IEmployeeData>): Partial<IEmployeeInfo> {
    if (formData.employeeInfo) {
      return formData.employeeInfo as unknown as Partial<IEmployeeInfo>;
    }
    throw new Error('No se encuentra información del empleado');
  }

  private solveGetVacationInfo(formData: Partial<IEmployeeData>): Array<TNonNullableValues<IAddVacation>> {
    if (formData.vacations) {
      return formData.vacations as unknown as Array<TNonNullableValues<IAddVacation>>;
    }
    return [];
  }

  private solveDni(formData: Partial<IEmployeeData>): string {
    const employeeInfo: Partial<IEmployeeInfo> = this.solveGetEmployeeInfo(formData);
    if (employeeInfo.dni) {
      return employeeInfo.dni;
    }
    throw new Error('No se encuentra el dni del empleado');
  }

  private solveVacaciones(formData: Partial<IEmployeeData>): IVacationsData {
    return {
      fechas: this.solveVacacionesData(formData),
    };
  }

  private solveVacacionesData(formData: Partial<IEmployeeData>): Array<IVacationsDates> {
    const vacations: Array<TNonNullableValues<IAddVacation>> = this.solveGetVacationInfo(formData);
    return vacations.map((vacation: TNonNullableValues<IAddVacation>) => {
      const { fechaInicio, fechaFin, motivo, anno } = vacation;
      return {
        fecha_inicio: fechaInicio,
        fecha_fin: fechaFin,
        motivo: motivo,
        anno: anno,
        mes_inicio: moment(fechaInicio).format('MMMM') as EMonthNames,
        mes_fin: moment(fechaFin).format('MMMM') as EMonthNames,
      };
    });
  }
}
