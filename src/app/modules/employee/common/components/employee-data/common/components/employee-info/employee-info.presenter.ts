import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IEmployeeInfo, IEmployeeInfoForm } from './common/interfaces';
import { EmployeeInfoFormModel } from './common/models/employee-info-form.model';
import { EmployeeDataPresenter } from '../../../employee-data.presenter';

@Injectable()
export class EmployeeInfoPresenter {
  public form!: FormGroup<IEmployeeInfoForm>;
  public controls!: EmployeeInfoFormModel;

  public constructor(
    private employeeDataPresenter: EmployeeDataPresenter,
    private formBuilder: FormBuilder,
  ) {
    this.solveCreateForm();
    this.addToParentForm();
  }

  private solveCreateForm(): void {
    this.controls = new EmployeeInfoFormModel();
    this.form = this.formBuilder.group<IEmployeeInfoForm>(this.controls);
  }

  private addToParentForm(): void {
    this.employeeDataPresenter.form.addControl('employeeInfo', this.form);
  }

  public updateForm(employee: IEmployeeInfo | null): void {
    if (employee) {
      this.form.patchValue(employee);
    }
  }
}
