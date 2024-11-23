import { Injectable } from '@angular/core';
import { IVacations, IVacationsDates } from '../../../../../../../../../../../common/interfaces';
import { IAddVacation } from '../../interfaces';

@Injectable()
export class EmployeeVacationsAdapter {
  public solveDataBody(vacations: IVacations): Array<Array<string>> {
    return vacations.vacaciones.fechas.map((v: IVacationsDates) => {
      return [v.anno, v.fecha_inicio, v.fecha_fin, v.motivo];
    });
  }

  public solveDataHeader(): Array<string> {
    return ['Año', 'Fecha Inicio', 'Fecha Fin', 'Motivo'];
  }

  public addVacation(data: Partial<IAddVacation>, oldVacations: Array<Array<string>>): Array<Array<string>> {
    const newVacation: Array<string> = [data.anno!, data.fechaInicio!, data.fechaFin!, data.motivo!];
    return [...oldVacations, newVacation];
  }

  public solveUpdateModelInOnInit(vacations: IVacations | null): Array<Partial<IAddVacation>> {
    if (vacations) {
      return vacations.vacaciones.fechas.map((v) => {
        return {
          anno: v.anno,
          fechaFin: v.fecha_fin,
          fechaInicio: v.fecha_inicio,
          motivo: v.motivo,
        };
      });
    }
    return [];
  }
}
