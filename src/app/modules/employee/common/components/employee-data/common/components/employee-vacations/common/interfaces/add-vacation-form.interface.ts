import { FormControl } from '@angular/forms';

export interface IAddVacationForm {
  motivo: FormControl<string | null>;
  fechaInicio: FormControl<string | null>;
  fechaFin: FormControl<string | null>;
  anno: FormControl<string | null>;
}
