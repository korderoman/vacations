import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { EmployeeVacationsContainer } from './employee-vacations.container';
import { EmployeeVacationsComponent } from './employee-vacations.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [EmployeeVacationsContainer, EmployeeVacationsComponent],
  imports: [ReactiveFormsModule, CommonModule],
  exports: [EmployeeVacationsContainer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EmployeeVacationsModule {}
