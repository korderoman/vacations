import { Auth, User } from '@angular/fire/auth';
import { Observable, Subscriber } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat';
import Unsubscribe = firebase.Unsubscribe;

export const NO_AUTH_GUARD = (): Observable<boolean> => {
  const auth: Auth = inject(Auth);
  const router: Router = inject(Router);

  // Crea un observable a partir de `onAuthStateChanged`
  return new Observable<boolean>((observer: Subscriber<boolean>) => {
    const unsubscribe: Unsubscribe = auth.onAuthStateChanged((user: User | null): void => {
      if (!user) {
        observer.next(true); // Usuario no autenticado
        observer.complete();
      } else {
        router.navigate(['/dashboard']); // Redirige al dashboard
        observer.next(false); // Usuario no autenticado
        observer.complete();
      }
    });

    // Devuelve la función de limpieza para `unsubscribe`
    return (): void => unsubscribe();
  });
};
