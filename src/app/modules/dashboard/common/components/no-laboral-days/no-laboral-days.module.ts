import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NoLaboralDaysContainer } from './no-laboral-days.container';
import { NoLaboralDaysComponent } from './no-laboral-days.component';
import { CommonModule } from '@angular/common';
import { NoLaboralDaysRoutingModule } from './no-laboral-days-routing.module';

@NgModule({
  declarations: [NoLaboralDaysContainer, NoLaboralDaysComponent],
  imports: [CommonModule, NoLaboralDaysRoutingModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [NoLaboralDaysContainer],
})
export class NoLaboralDaysModule {}
