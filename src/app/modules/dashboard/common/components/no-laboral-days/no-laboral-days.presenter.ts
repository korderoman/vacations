import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { INoLaboralDaysForm } from './common/interfaces';
import { NoLaboralDayModel } from './common/models';

@Injectable()
export class NoLaboralDaysPresenter {
  public form!: FormGroup<INoLaboralDaysForm>;
  public controls!: NoLaboralDayModel;
  public constructor(private readonly formBuilder: FormBuilder) {
    this.initForm();
  }

  private initForm(): void {
    this.controls = new NoLaboralDayModel();
    this.form = this.formBuilder.group({ ...this.controls });
  }
}
