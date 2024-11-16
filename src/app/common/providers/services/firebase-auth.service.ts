import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { IStatus } from '../../interfaces';
import firebase from 'firebase/compat';
import FirebaseError = firebase.FirebaseError;
import { ILoginRequest } from '../../../modules/login/common/interfaces';

@Injectable()
export class FirebaseAuthService {
  public constructor(private readonly auth: Auth) {}

  public async onLogin(request: ILoginRequest): Promise<IStatus> {
    const { email, password } = request;
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      return {
        success: true,
        message: 'Credenciales correctas',
      };
    } catch (e: unknown) {
      console.error(e);
      return {
        success: false,
        message: this.solveErrorMessage(e),
      };
    }
  }

  private solveFirebaseErrorGuard(error: unknown): error is FirebaseError {
    if (error && typeof error === 'object' && 'code' in error && 'message' in error) {
      return true;
    }
    return false;
  }

  private solveErrorMessage(error: unknown): string {
    if (this.solveFirebaseErrorGuard(error)) {
      return error.message;
    }
    return JSON.stringify(error);
  }
}
