import { NgModule } from '@angular/core';
import { AvailableDaysComponent } from './available-days.component';
import { AvailableDaysContainer } from './available-days.container';
import { CommonModule } from '@angular/common';
import { AvailableDaysRoutingModule } from './available-days-routing.module';

@NgModule({
  imports: [CommonModule, AvailableDaysRoutingModule],
  declarations: [AvailableDaysComponent, AvailableDaysContainer],
  exports: [AvailableDaysContainer],
  providers: [],
})
export class AvailableDaysModule {}
