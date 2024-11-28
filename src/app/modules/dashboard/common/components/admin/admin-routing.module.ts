import { Routes, RouterModule } from '@angular/router';
import { AdminContainer } from './admin.container';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AdminContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AdminRoutingModule {}
