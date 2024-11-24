import { from, Observable } from 'rxjs';
import { inject } from '@angular/core';
import { IParametersFirebase } from '../interfaces';
import { ParametersAdapter } from '../providers/adapters/parameters.adapter';
import { ParametersService } from '../providers/services/parameters.service';

export const LOAD_PARAMETER_GUARD = (): Observable<boolean> => {
  const parameterAdapter: ParametersAdapter = inject(ParametersAdapter);
  const parametersService: ParametersService = inject(ParametersService);

  return from(
    (async () => {
      try {
        const response: IParametersFirebase = await parametersService.solveGetParameters();
        parameterAdapter.solveSetParameters(response);
        return true;
      } catch (e) {
        console.error('No ha sido posible cargar la parametría', e);
        return true;
      }
    })(),
  );
};
