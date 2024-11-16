import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LoginContainer } from './login.container';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { FirebaseAuthService } from '../../common/providers/services/firebase-auth.service';

@NgModule({
  declarations: [LoginContainer, LoginComponent],
  imports: [ReactiveFormsModule, CommonModule, LoginRoutingModule],
  providers: [FirebaseAuthService],
  exports: [LoginContainer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginModule {}
