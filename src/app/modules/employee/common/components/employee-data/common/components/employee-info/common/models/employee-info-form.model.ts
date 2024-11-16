import { RequiredControl } from '../../../../../../../../../../common/controls/required.control';
import { IEmployeeInfoForm } from '../interfaces';

export class EmployeeInfoFormModel implements IEmployeeInfoForm {
  public apellidos: RequiredControl<string | null>;
  public dni: RequiredControl<string | null>;
  public ingreso: RequiredControl<string | null>;
  public lt: RequiredControl<string | null>;
  public perfil: RequiredControl<string | null>;
  public scrum_master: RequiredControl<string | null>;
  public nombres: RequiredControl<string | null>;
  public squad: RequiredControl<string | null>;

  constructor() {
    this.apellidos = new RequiredControl(null);
    this.dni = new RequiredControl(null);
    this.ingreso = new RequiredControl(null);
    this.lt = new RequiredControl(null);
    this.perfil = new RequiredControl(null);
    this.scrum_master = new RequiredControl(null);
    this.nombres = new RequiredControl(null);
    this.squad = new RequiredControl(null);
  }
}
