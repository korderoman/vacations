import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { EmployeeInfoComponent } from './employee-info.component';
import { EmployeeInfoContainer } from './employee-info.container';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectDirective } from '../../../../../../../../common/directives/select.directive';
const directive = [SelectDirective];
@NgModule({
  declarations: [EmployeeInfoComponent, EmployeeInfoContainer],
  imports: [CommonModule, ReactiveFormsModule, ...directive],
  exports: [EmployeeInfoContainer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EmployeeInfoModule {}
