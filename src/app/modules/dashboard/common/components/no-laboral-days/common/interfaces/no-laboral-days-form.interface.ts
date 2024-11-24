import { FormControl } from '@angular/forms';

export interface INoLaboralDaysForm {
  scrumMaster: FormControl<string | null>;
  lt: FormControl<string | null>;
  squad: FormControl<string | null>;
  year: FormControl<string | null>;
  startDate: FormControl<string | null>;
  endDate: FormControl<string | null>;
  names: FormControl<string | null>;
  lastName: FormControl<string | null>;
}
