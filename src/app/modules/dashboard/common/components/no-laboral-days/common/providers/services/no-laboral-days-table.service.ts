import { Injectable } from '@angular/core';
import { IDashboardUser } from '../../../../../../../employee/common/components/employee-data/common/components/employee-info/common/interfaces';
import { ITableComplexHeader } from '../../../../../../../../common/components/table-complex/common/interfaces';

@Injectable()
export class NoLaboralDaysTableService {
  public constructor() {}

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
        item: 'startDate',
        name: 'Fecha de inicio',
      },
      {
        item: 'endDate',
        name: 'Fecha de fin',
      },
      {
        item: 'motive',
        name: 'Motivo',
      },
    ];
  }
}
