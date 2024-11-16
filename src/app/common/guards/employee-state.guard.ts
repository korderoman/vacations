import { Observable, Subscriber } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStateManagerService } from '../providers/services/local-state-manager.service';
import { IEmployee } from '../interfaces';

export const EMPLOYEE_GUARD = (): Observable<boolean> => {
  const localStateManage: LocalStateManagerService = inject(LocalStateManagerService);
  const router: Router = inject(Router);
  const hasEmployee: boolean = localStateManage.solveCheckState<IEmployee>('employee');
  return new Observable((observer: Subscriber<boolean>) => {
    if (hasEmployee) {
      observer.next(true);
      observer.complete();
    } else {
      router.navigate(['/employee/search']);
      observer.next(false);
      observer.complete();
    }
  });
};
