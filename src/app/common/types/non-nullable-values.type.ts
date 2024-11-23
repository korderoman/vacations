export type TNonNullableValues<T> = {
  [p in keyof T]: NonNullable<T[p]>;
};
