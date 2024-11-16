import { FormArray, FormControl, FormGroup } from '@angular/forms';

/**
 * @description Extrae por inferencia los tipos contenidos dentro un formControl
 * asociados a un FormGroup
 */
export type ExtractTypesFromFormControls<T> = {
  [K in keyof T]: T[K] extends FormControl<infer U> ? U : T[K];
};
/**
 * @description Extrae por extensión por los distintos tipos de agrupamiento de controles como
 * los formGroups, formArrays
 */
export type ExtractTypes<T> = {
  [k in keyof T]: T[k] extends FormControl<infer U>
    ? U
    : T[k] extends FormGroup<infer V>
      ? ExtractTypesFromFormControls<V>
      : T[k] extends FormArray<FormGroup<infer L>>
        ? Array<ExtractTypesFromFormControls<L>>
        : never;
};
