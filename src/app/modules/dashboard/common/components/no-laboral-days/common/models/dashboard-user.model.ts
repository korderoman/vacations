import { IEmployee, IVacations, IVacationsDates } from '../../../../../../../common/interfaces';
import { IDashboardUser } from '../../../../interfaces';
import * as moment from 'moment';
import { Moment } from 'moment';
import { EMonthNames } from '../enums';

export class DashboardUserModel implements IDashboardUser {
  public readonly apellidos: string;
  public readonly dni: string;
  public readonly ingreso: string;
  public readonly lt: string;
  public readonly nombres: string;
  public readonly perfil: string;
  public readonly scrum_master: string;
  public readonly squad: string;
  public readonly abril: string;
  public readonly agosto: string;
  public readonly diciembre: string;
  public readonly enero: string;
  public readonly febrero: string;
  public readonly julio: string;
  public readonly junio: string;
  public readonly marzo: string;
  public readonly mayo: string;
  public readonly noviembre: string;
  public readonly octubre: string;
  public readonly septiembre: string;

  public constructor(employee: IEmployee) {
    this.apellidos = this.solveApellidos(employee);
    this.dni = this.solveDni(employee);
    this.ingreso = this.solveIngreso(employee);
    this.lt = this.solveLt(employee);
    this.nombres = this.solveNombres(employee);
    this.perfil = this.solvePerfil(employee);
    this.scrum_master = this.solveScrumMaster(employee);
    this.squad = this.solveSquad(employee);
    this.enero = this.solveCheckIfExistVacations(employee.vacaciones, EMonthNames.enero);
    this.febrero = this.solveCheckIfExistVacations(employee.vacaciones, EMonthNames.febrero);
    this.marzo = this.solveCheckIfExistVacations(employee.vacaciones, EMonthNames.marzo);
    this.abril = this.solveCheckIfExistVacations(employee.vacaciones, EMonthNames.abril);
    this.mayo = this.solveCheckIfExistVacations(employee.vacaciones, EMonthNames.mayo);
    this.junio = this.solveCheckIfExistVacations(employee.vacaciones, EMonthNames.junio);
    this.julio = this.solveCheckIfExistVacations(employee.vacaciones, EMonthNames.julio);
    this.agosto = this.solveCheckIfExistVacations(employee.vacaciones, EMonthNames.agosto);
    this.septiembre = this.solveCheckIfExistVacations(employee.vacaciones, EMonthNames.septiembre);
    this.octubre = this.solveCheckIfExistVacations(employee.vacaciones, EMonthNames.octubre);
    this.noviembre = this.solveCheckIfExistVacations(employee.vacaciones, EMonthNames.noviembre);
    this.diciembre = this.solveCheckIfExistVacations(employee.vacaciones, EMonthNames.diciembre);
  }

  private solveApellidos(employee: IEmployee): string {
    return employee.apellidos;
  }

  private solveDni(employee: IEmployee): string {
    return employee.dni;
  }

  private solveIngreso(employee: IEmployee): string {
    return employee.ingreso;
  }

  private solveLt(employee: IEmployee): string {
    return employee.lt;
  }

  private solveNombres(employee: IEmployee): string {
    return employee.nombres;
  }

  private solvePerfil(employee: IEmployee): string {
    return employee.perfil;
  }

  private solveScrumMaster(employee: IEmployee): string {
    return employee.scrum_master;
  }

  private solveSquad(employee: IEmployee): string {
    return employee.squad;
  }

  private solveCheckIfExistVacations(vacations: IVacations | null, month: EMonthNames): string {
    if (vacations) {
      if (vacations.vacaciones.fechas.length > 0) {
        const dates: Array<IVacationsDates> = vacations.vacaciones.fechas.filter((m: IVacationsDates) =>
          this.solveGetMonthName(m.fecha_inicio, month),
        );
        return this.solveParseVacationDateToString(dates);
      }
      return '--';
    }
    return '--';
  }

  private solveParseVacationDateToString(dates: Array<IVacationsDates>): string {
    if (dates.length > 0) {
      let cellContent = '';
      dates.forEach((date: IVacationsDates, index: number) => {
        const content = `Inicio: ${date.fecha_inicio} - Fin: ${date.fecha_fin} | motivo: ${date.motivo} `;
        cellContent += content;
        if (index === dates.length - 1) {
          cellContent += `-----------`;
        }
      });
      return cellContent;
    }
    return '--';
  }

  private solveGetMonthName(dateRaw: string, monthWanted: EMonthNames): boolean {
    const date: Moment = moment(dateRaw, 'YYYY-MM-DD', true);
    if (date.isValid()) {
      const month = date.format('MMMM') as EMonthNames;
      return month === monthWanted;
    }
    throw new Error('Invalid date');
  }
}
