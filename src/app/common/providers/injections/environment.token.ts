import { InjectionToken } from '@angular/core';
import { ENVIRONMENT } from '../../../../environments/environment';

export const ENVIRONMENT_TOKEN = new InjectionToken('ENVIRONMENT_TOKEN', {
  providedIn: 'root',
  factory: () => ENVIRONMENT,
});
