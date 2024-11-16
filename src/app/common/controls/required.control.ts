import { FormControl, FormControlOptions, Validators } from '@angular/forms';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export class RequiredControl<T> extends FormControl<T> {
  protected errorsMessages: { [key: string]: string } = {
    required: 'Este campo es requerido',
  };

  public constructor(value: T, required = true, opts?: FormControlOptions) {
    super(value, opts);
    if (required) {
      this.setValidators(Validators.required);
    }
  }

  public get textError(): string {
    let message = '';
    for (const error in this.errors) {
      message = this.errorsMessages[error];
    }
    return message;
  }

  public addCustomError(key: string, msm: string): void {
    this.errorsMessages[key] = msm;
  }

  public get isInvalid(): boolean {
    return this.invalid && this.touched && this.dirty;
  }
}
