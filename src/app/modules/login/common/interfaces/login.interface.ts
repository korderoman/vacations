import { ILoginForm } from './login-form.interface';
import { ExtractTypesFromFormControls } from '../../../../common/types';

export interface ILogin extends ExtractTypesFromFormControls<ILoginForm> {}
