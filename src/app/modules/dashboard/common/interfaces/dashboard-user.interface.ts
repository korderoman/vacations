import { IEmployeeFirebase, IVacationsDates } from '../../../../common/interfaces';

export interface IDashboardUser extends Omit<IEmployeeFirebase, 'vacaciones'> {
  enero: string;
  febrero: string;
  marzo: string;
  abril: string;
  mayo: string;
  junio: string;
  julio: string;
  agosto: string;
  septiembre: string;
  octubre: string;
  noviembre: string;
  diciembre: string;
}
