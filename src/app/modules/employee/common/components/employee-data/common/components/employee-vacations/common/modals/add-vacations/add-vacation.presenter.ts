import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IAddVacationForm } from '../../interfaces';
import { AddVacationFormModel } from '../../models';

@Injectable()
export class AddVacationPresenter {
  public form: FormGroup<IAddVacationForm>;
  public control: AddVacationFormModel;
  public constructor() {
    this.control = new AddVacationFormModel();
    this.form = new FormGroup<IAddVacationForm>({ ...this.control });
  }
}
