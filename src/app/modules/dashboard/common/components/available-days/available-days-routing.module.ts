import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AvailableDaysContainer } from './available-days.container';

const routes: Routes = [
  {
    path: '',
    component: AvailableDaysContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AvailableDaysRoutingModule {}
