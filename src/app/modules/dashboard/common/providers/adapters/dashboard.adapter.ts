import { Injectable } from '@angular/core';
import { IDashboardBundleParameters, IMenusDashboard } from '../../interfaces';
import { EMenus } from '../../enums';

@Injectable()
export class DashboardAdapter {
  public solveBundleParameters(): IDashboardBundleParameters {
    return {
      menus: this.solveMenus(),
    };
  }

  private solveMenus(): Array<IMenusDashboard> {
    return [
      { path: 'ADMIN', pathLabel: EMenus.ADMIN },
      { path: 'DIAS_NO_LABORADOS', pathLabel: EMenus.DIAS_NO_LABORADOS },
      { path: 'DIAS_DISPONIBLES', pathLabel: EMenus.DIAS_DISPONIBLES },
    ];
  }
}
