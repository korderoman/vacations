import { FormControl } from '@angular/forms';

export interface IEmployeeSearchForm {
  dni: FormControl<string | null>;
}
