import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NoLaboralDaysContainer } from './no-laboral-days.container';

const routes: Routes = [
  {
    path: '',
    component: NoLaboralDaysContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class NoLaboralDaysRoutingModule {}
