import { IVacationsDates } from './vacations-dates.interface';

export interface IVacationsData {
  anno: number;
  fechas: Array<IVacationsDates>;
}
