import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NoLaboralDaysContainer } from './no-laboral-days.container';
import { NoLaboralDaysComponent } from './no-laboral-days.component';
import { CommonModule } from '@angular/common';
import { NoLaboralDaysRoutingModule } from './no-laboral-days-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectDirective } from '../../../../../common/directives/select.directive';
import { TableComplexComponent } from '../../../../../common/components/table-complex/table-complex.component';

const directive = [SelectDirective];

@NgModule({
  declarations: [NoLaboralDaysContainer, NoLaboralDaysComponent],
  imports: [CommonModule, ReactiveFormsModule, NoLaboralDaysRoutingModule, ...directive, TableComplexComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [NoLaboralDaysContainer],
})
export class NoLaboralDaysModule {}
