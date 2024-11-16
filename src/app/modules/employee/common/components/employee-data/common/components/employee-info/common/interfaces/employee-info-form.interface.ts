import { FormControl } from '@angular/forms';

export interface IEmployeeInfoForm {
  apellidos: FormControl<string | null>;
  nombres: FormControl<string | null>;
  dni: FormControl<string | null>;
  ingreso: FormControl<string | null>;
  lt: FormControl<string | null>;
  perfil: FormControl<string | null>;
  scrum_master: FormControl<string | null>;
  squad: FormControl<string | null>;
}
