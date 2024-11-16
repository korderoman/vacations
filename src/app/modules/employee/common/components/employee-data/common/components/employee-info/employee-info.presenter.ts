import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IEmployeeInfo, IEmployeeInfoForm } from './common/interfaces';
import { EmployeeInfoFormModel } from './common/models/employee-info-form.model';

@Injectable()
export class EmployeeInfoPresenter {
  public form: FormGroup<IEmployeeInfoForm>;
  public controls!: EmployeeInfoFormModel;

  public constructor(private formBuilder: FormBuilder) {
    this.form = this.solveCreateForm();
  }

  private solveCreateForm(): FormGroup<IEmployeeInfoForm> {
    this.controls = new EmployeeInfoFormModel();
    return this.formBuilder.group<IEmployeeInfoForm>(this.controls);
  }

  public updateForm(employee: IEmployeeInfo | null): void {
    if (employee) {
      console.log('mode', employee);
      this.form.patchValue(employee);
    }

    this.controls.squad.valueChanges.subscribe((value) => {
      console.log('value', value);
    });
  }
}
