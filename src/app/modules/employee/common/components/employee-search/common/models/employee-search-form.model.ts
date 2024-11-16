import { IEmployeeSearchForm } from '../interfaces';
import { RequiredControl } from '../../../../../../../common/controls/required.control';

export class EmployeeSearchFormModel implements IEmployeeSearchForm {
  public dni: RequiredControl<string | null>;

  public constructor() {
    this.dni = new RequiredControl<string | null>(null);
  }
}
