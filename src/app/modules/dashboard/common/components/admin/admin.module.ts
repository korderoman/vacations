import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AdminContainer } from './admin.container';
import { AdminComponent } from './admin.component';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminContainer, AdminComponent],
  imports: [CommonModule, AdminRoutingModule],
  exports: [AdminContainer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule {}
