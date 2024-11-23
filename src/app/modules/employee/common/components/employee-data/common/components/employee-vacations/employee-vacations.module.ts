import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { EmployeeVacationsContainer } from './employee-vacations.container';
import { EmployeeVacationsComponent } from './employee-vacations.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from '../../../../../../../../common/components/table/custom-table.component';
import { AddVacationComponent } from './common/modals/add-vacations/add-vacation.component';

@NgModule({
  declarations: [EmployeeVacationsContainer, EmployeeVacationsComponent],
  imports: [ReactiveFormsModule, CommonModule, CustomTableComponent, AddVacationComponent],
  exports: [EmployeeVacationsContainer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EmployeeVacationsModule {}
