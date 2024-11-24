import { Component } from '@angular/core';
import { NoLaboralDaysPresenter } from './no-laboral-days.presenter';

@Component({
  selector: 'ntt-data-no-laboral-days-ui',
  templateUrl: './no-laboral-days.component.html',
  providers: [NoLaboralDaysPresenter],
})
export class NoLaboralDaysComponent {
  public constructor(public readonly noLaboralDaysPresenter: NoLaboralDaysPresenter) {}
}
