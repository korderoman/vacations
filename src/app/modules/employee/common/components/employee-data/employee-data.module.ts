import { NgModule } from '@angular/core';
import { EmployeeDataComponent } from './employee-data.component';
import { EmployeeDataContainer } from './employee-data.container';
import { CommonModule } from '@angular/common';
import { EmployeeInfoModule } from './common/components/employee-info/employee-info.module';
import { EmployeeVacationsModule } from './common/components/employee-vacations/employee-vacations.module';
import { BoxComponent } from '../../../../../common/components/box/box.component';

@NgModule({
  declarations: [EmployeeDataComponent, EmployeeDataContainer],
  imports: [CommonModule, EmployeeInfoModule, EmployeeVacationsModule, BoxComponent],
  exports: [EmployeeDataContainer],
})
export class EmployeeDataModule {}
