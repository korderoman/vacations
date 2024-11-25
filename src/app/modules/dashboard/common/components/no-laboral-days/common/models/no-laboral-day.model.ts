import { INoLaboralDaysForm } from '../interfaces';
import { RequiredControl } from '../../../../../../../common/controls/required.control';

export class NoLaboralDayModel implements INoLaboralDaysForm {
  public scrumMaster: RequiredControl<string | null>;
  public lt: RequiredControl<string | null>;
  public squad: RequiredControl<string | null>;
  public year: RequiredControl<string | null>;
  public startDate: RequiredControl<string | null>;
  public endDate: RequiredControl<string | null>;
  public names: RequiredControl<string | null>;
  public lastName: RequiredControl<string | null>;

  public constructor() {
    this.scrumMaster = new RequiredControl<string | null>(null, false);
    this.lt = new RequiredControl<string | null>(null, false);
    this.squad = new RequiredControl<string | null>(null, false);
    this.year = new RequiredControl<string | null>(null, false);
    this.startDate = new RequiredControl<string | null>(null, false);
    this.endDate = new RequiredControl<string | null>(null, false);
    this.names = new RequiredControl<string | null>(null, false);
    this.lastName = new RequiredControl<string | null>(null, false);
  }
}
