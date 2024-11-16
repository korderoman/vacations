import { Injectable } from '@angular/core';
import { ILogin } from '../../interfaces';
import { ILoginRequest } from '../../interfaces';

@Injectable()
export class LoginAdapter {
  public constructor() {}
  public solveLoginRequest(formData: Partial<ILogin>): ILoginRequest {
    if (formData.email && formData.password) {
      return {
        email: formData.email,
        password: formData.password,
      };
    }
    throw new Error('No se ha recibido un valor para email o password');
  }
}
