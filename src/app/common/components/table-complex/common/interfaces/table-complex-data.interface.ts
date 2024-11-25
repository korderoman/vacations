import { ITableComplexHeader } from './table-complex-header.interface';

export interface ITableComplexData<T> {
  headers: Array<ITableComplexHeader<T>>;
  body: Array<T>;
}
