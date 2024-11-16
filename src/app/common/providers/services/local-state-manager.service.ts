import { Injectable } from '@angular/core';
import { TStatesName } from '../../types';

@Injectable({ providedIn: 'root' })
export class LocalStateManagerService {
  private state;
  public constructor() {
    this.state = new Map<TStatesName, any>();
  }

  public solveSetState<T>(key: TStatesName, value: T): void {
    this.state.set(key, value);
  }

  public solveGetState<T>(key: TStatesName): T | null {
    if (this.solveCheckState<T>(key)) {
      return this.state.get(key) as T;
    }
    return null;
  }

  public solveCheckState<T>(key: TStatesName): boolean {
    const state: T | null | undefined = this.state.get(key);
    if (state === undefined) {
      return false;
    }
    return true;
  }
}
