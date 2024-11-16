import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainer } from './dashboard.container';

const routes: Routes = [
  {
    path: '',
    component: DashboardContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class DashboardRoutingModule {}
