import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardContainer } from './dashboard.container';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent, DashboardContainer],
  imports: [CommonModule, DashboardRoutingModule, RouterOutlet, RouterLink, RouterLinkActive],
  exports: [DashboardContainer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
