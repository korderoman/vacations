import { Component, EventEmitter, Output } from '@angular/core';
import { LoginPresenter } from './login.presenter';
import { ILogin } from './common/interfaces/login.interface';

@Component({
  selector: 'ntt-data-login-ui',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginPresenter],
})
export class LoginComponent {
  @Output() login: EventEmitter<Partial<ILogin>>;
  public constructor(public readonly loginPresenter: LoginPresenter) {
    this.login = new EventEmitter<Partial<ILogin>>();
  }

  public onLogin(): void {
    this.login.emit(this.loginPresenter.form.value);
  }
}
