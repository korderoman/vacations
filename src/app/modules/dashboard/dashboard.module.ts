import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardContainer } from './dashboard.container';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent, DashboardContainer],
  imports: [CommonModule, DashboardRoutingModule],
  exports: [DashboardContainer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
