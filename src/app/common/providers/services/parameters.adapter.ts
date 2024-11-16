import { Injectable } from '@angular/core';
import { LocalStateManagerService } from './local-state-manager.service';
import { IParametersFirebase } from '../../interfaces';
import { TStatesName } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ParametersAdapter {
  public constructor(private readonly localStateManager: LocalStateManagerService) {}

  public solveSetParameters(parametersFromFirebase: IParametersFirebase): void {
    const keys: Array<string> = Object.keys(parametersFromFirebase);
    keys.forEach((key: string) => {
      const firebasePropertyKey = key as keyof IParametersFirebase;
      this.localStateManager.solveSetState(key as TStatesName, parametersFromFirebase[firebasePropertyKey]);
    });
  }
}
