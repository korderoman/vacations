import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { EmployeeSearchComponent } from './employee-search.component';
import { EmployeeSearchContainer } from './employee-search.container';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeeSearchComponent, EmployeeSearchContainer],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [EmployeeSearchContainer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EmployeeSearchModule {}
