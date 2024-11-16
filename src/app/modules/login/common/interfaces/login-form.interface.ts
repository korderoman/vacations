import { FormControl } from '@angular/forms';

export interface ILoginForm {
  password: FormControl<string | null>;
  email: FormControl<string | null>;
}
