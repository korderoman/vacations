import { IEmployeeFirebase } from '../../../../../../../../../../common/interfaces';

export interface IDashboardUser extends Omit<IEmployeeFirebase, 'vacaciones'> {
  startDate: string;
  endDate: string;
  motive: string;
}
