import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { IAddVacation, IAddVacationForm } from './common/interfaces';
import { AddVacationFormModel } from './common/models';
import { EmployeeDataPresenter } from '../../../employee-data.presenter';

@Injectable()
export class EmployeeVacationsPresenter {
  public form!: FormArray<FormGroup<IAddVacationForm>>;
  public controls!: AddVacationFormModel;
  public constructor(
    private employeeDataPresenter: EmployeeDataPresenter,
    private formBuilder: FormBuilder,
  ) {
    this.initControls();
    this.addToParentForm();
  }

  private initControls(): void {
    this.form = this.formBuilder.array<FormGroup<IAddVacationForm>>([]);
  }

  public updateValues(values: Array<Partial<IAddVacation>>): void {
    this.controls = new AddVacationFormModel();
    values.forEach((v: Partial<IAddVacation>, index: number): void => {
      const vacationForm: FormGroup<IAddVacationForm> = this.formBuilder.group<IAddVacationForm>({ ...this.controls });
      vacationForm.patchValue(v);
      this.form.insert(index, vacationForm);
      this.form.removeAt(index + 1);
    });
  }
  private addToParentForm(): void {
    this.employeeDataPresenter.form.addControl('vacations', this.form);
  }
}
