import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IEmployeeSearchForm } from './common/interfaces';
import { EmployeeSearchFormModel } from './common/models/employee-search-form.model';

@Injectable()
export class EmployeeSearchPresenter {
  public form: FormGroup<IEmployeeSearchForm>;
  public controls!: EmployeeSearchFormModel;
  public constructor(private formBuilder: FormBuilder) {
    this.form = this.solveCreateForm();
  }

  private solveCreateForm(): FormGroup<IEmployeeSearchForm> {
    this.controls = new EmployeeSearchFormModel();
    return this.formBuilder.group<IEmployeeSearchForm>(this.controls);
  }
}
