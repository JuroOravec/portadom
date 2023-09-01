export type MaybePromise<T> = T | Promise<T>;
export type MaybeArray<T> = T | T[];

export type ArrVal<T extends any[] | readonly any[]> = T[number];

export type PickPartial<T extends object, Keys extends keyof T> = Omit<T, Keys> &
  Partial<Pick<T, Keys>>;

export type PickRequired<T extends object, Keys extends keyof T> = Omit<T, Keys> &
  Required<Pick<T, Keys>>;
