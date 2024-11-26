import { EMonthNames } from '../../../modules/dashboard/common/components/no-laboral-days/common/enums';

export interface IVacationsDates {
  fecha_inicio: string;
  fecha_fin: string;
  anno: string;
  motivo: string;
  mes_inicio: EMonthNames;
  mes_fin: EMonthNames;
}
