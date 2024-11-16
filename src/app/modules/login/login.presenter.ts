import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ILoginForm } from './common/interfaces';
import { LoginModel } from './common/models/login.model';

@Injectable()
export class LoginPresenter {
  public form: FormGroup<ILoginForm>;
  public controls!: LoginModel;

  public constructor(private formBuilder: FormBuilder) {
    this.form = this.solveCreateForm();
  }

  private solveCreateForm(): FormGroup<ILoginForm> {
    this.controls = new LoginModel();
    return this.formBuilder.group<ILoginForm>({ ...this.controls });
  }
}
