export interface IStatus<T = null> {
  success: boolean;
  data?: T;
  message?: string;
}
