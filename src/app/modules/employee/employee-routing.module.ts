import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeContainer } from './employee.container';
import { EmployeeSearchContainer } from './common/components/employee-search/employee-search.container';
import { EmployeeDataContainer } from './common/components/employee-data/employee-data.container';
import { EMPLOYEE_GUARD } from '../../common/guards/employee-state.guard';

const routes: Routes = [
  {
    path: '',
    component: EmployeeContainer,
    children: [
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full',
      },
      {
        path: 'search',
        component: EmployeeSearchContainer,
      },
      {
        path: 'data',
        component: EmployeeDataContainer,
        canActivate: [EMPLOYEE_GUARD],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
