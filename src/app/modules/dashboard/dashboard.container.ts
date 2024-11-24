import { Component } from '@angular/core';
import { DashboardAdapter } from './common/providers/adapters/dashboard.adapter';
import { IDashboardBundleParameters } from './common/interfaces';

@Component({
  selector: 'ntt-data-dashboard',
  templateUrl: './dashboard.container.html',
  providers: [DashboardAdapter],
})
export class DashboardContainer {
  public bundleParameters: IDashboardBundleParameters;
  public constructor(private readonly dashboardAdapter: DashboardAdapter) {
    this.bundleParameters = this.dashboardAdapter.solveBundleParameters();
  }
}
