import { from, Observable } from 'rxjs';
import { inject } from '@angular/core';
import { FirebaseDocsService } from '../providers/services/firebase-docs.service';
import { IParametersFirebase } from '../interfaces';
import { ParametersAdapter } from '../providers/services/parameters.adapter';

export const LOAD_PARAMETER_GUARD = (): Observable<boolean> => {
  const parameterAdapter: ParametersAdapter = inject(ParametersAdapter);
  const firebaseDocsService: FirebaseDocsService = inject(FirebaseDocsService);

  return from(
    (async () => {
      try {
        const response: IParametersFirebase = await firebaseDocsService.solveGetParameters();
        parameterAdapter.solveSetParameters(response);
        return true;
      } catch (e) {
        console.error('No ha sido posible cargar la parametría', e);
        return true;
      }
    })(),
  );
};
