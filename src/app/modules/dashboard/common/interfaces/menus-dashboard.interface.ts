import { EMenus } from '../enums';

export interface IMenusDashboard {
  path: keyof typeof EMenus;
  pathLabel: EMenus;
}
