import { Component } from '@angular/core';
import { ILogin, ILoginRequest } from './common/interfaces';
import { LoginAdapter } from './common/providers/adapters/login.adapter';
import { Router } from '@angular/router';
import { IStatus } from '../../common/interfaces';
import { FirebaseAuthService } from '../../common/providers/services/firebase-auth.service';

@Component({
  selector: 'ntt-data-login',
  templateUrl: './login.container.html',
  providers: [LoginAdapter, FirebaseAuthService],
})
export class LoginContainer {
  public isLoading: boolean;
  public constructor(
    private readonly router: Router,
    private readonly loginAdapter: LoginAdapter,
    private readonly firebaseAuthService: FirebaseAuthService,
  ) {
    this.isLoading = false;
  }
  public async onLogin(form: Partial<ILogin>): Promise<void> {
    try {
      this.isLoading = true;
      const request: ILoginRequest = this.loginAdapter.solveLoginRequest(form);
      const response: IStatus = await this.firebaseAuthService.onLogin(request);
      if (response.success) {
        await this.router.navigate(['/dashboard']);
      }
    } finally {
      this.isLoading = false;
    }
  }
}
