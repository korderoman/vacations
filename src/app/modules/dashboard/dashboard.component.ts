import { Component, Input } from '@angular/core';
import { IDashboardBundleParameters } from './common/interfaces';

@Component({
  selector: 'ntt-data-dashboard-ui',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @Input() public bundleParameters!: IDashboardBundleParameters;
}
