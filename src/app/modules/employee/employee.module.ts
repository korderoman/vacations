import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeContainer } from './employee.container';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeSearchModule } from './common/components/employee-search/employee-search.module';
import { EmployeeDataModule } from './common/components/employee-data/employee-data.module';

const CHILDREN = [EmployeeSearchModule, EmployeeDataModule];
@NgModule({
  declarations: [EmployeeContainer, EmployeeComponent],
  imports: [CommonModule, ReactiveFormsModule, EmployeeRoutingModule, ...CHILDREN],
  exports: [EmployeeContainer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EmployeeModule {}
