import { IAddVacationForm } from '../interfaces';
import { RequiredControl } from '../../../../../../../../../../common/controls/required.control';

export class AddVacationFormModel implements IAddVacationForm {
  public anno: RequiredControl<string | null>;
  public fechaFin: RequiredControl<string | null>;
  public fechaInicio: RequiredControl<string | null>;
  public motivo: RequiredControl<string | null>;

  public constructor() {
    this.anno = new RequiredControl<string | null>(null);
    this.fechaInicio = new RequiredControl<string | null>(null);
    this.fechaFin = new RequiredControl<string | null>(null);
    this.motivo = new RequiredControl<string | null>(null);
  }
}
