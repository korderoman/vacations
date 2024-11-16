import { ILoginForm } from '../interfaces';
import { RequiredControl } from '../../../../common/controls/required.control';

export class LoginModel implements ILoginForm {
  public readonly email: RequiredControl<string | null>;
  public readonly password: RequiredControl<string | null>;

  public constructor() {
    this.email = new RequiredControl<string | null>(null);
    this.password = new RequiredControl<string | null>(null);
  }
}
