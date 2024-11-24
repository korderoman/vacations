import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainer } from './dashboard.container';

const routes: Routes = [
  {
    path: '',
    component: DashboardContainer,
    children: [
      {
        path: '',
        redirectTo: 'dias_no_laborados',
        pathMatch: 'full',
      },
      {
        path: 'dias_no_laborados',
        loadChildren: () => import('./common/components/no-laboral-days/no-laboral-days.module').then((m) => m.NoLaboralDaysModule),
      },
      {
        path: 'dias_disponibles',
        loadChildren: () => import('./common/components/available-days/available-days.module').then((m) => m.AvailableDaysModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class DashboardRoutingModule {}
