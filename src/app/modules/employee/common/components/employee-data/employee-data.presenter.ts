import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IEmployeeDataForm } from './common/interfaces';

@Injectable()
export class EmployeeDataPresenter {
  public form: FormGroup<IEmployeeDataForm>;
  public constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group<IEmployeeDataForm>({});
  }
}
