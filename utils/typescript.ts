/**
 * This file contains types that extends the current typescript types.
 */

/**
 * Maybe<T> is a type that can be either T or undefined.
 * same as T | undefined
 *
 * @example
 * let a: Maybe<string>; // can be string or undefined
 * let b: Maybe<number> = 1; // can be number or undefined
 */
export type Maybe<T> = T | undefined;



/**
 * MaybeNull<T> is a type that can be either T or null.
 * same as T | null
 *
 * @example
 * let a: MaybeNull<string> = null; // a can be string or null
 * let b: MaybeNull<number> = 1; // b can be string or null
 */
export type MaybeNull<T> = T | null;

/**
 * MaybeNull<T> function that returns a MaybeNull<T> with an initial value of null.
 * @param value
 * @example
 * let a: MaybeNull<string> = null;
 * // can be written as
 * let a = MaybeNull<string>();
 */
export function MaybeNull<T = any>(value: MaybeNull<T> = null): MaybeNull<T> {
    return value;
}

/**
 * MaybeFalse<T> is a type that can be either T or false.
 * same as T | false
 *
 * @example
 * let a: MaybeFalse<string> = false; // a can be string or false
 * let b: MaybeFalse<number> = 1; // b can be string or false
 */
export type MaybeFalse<T> = T | false;

/**
 * MaybeFalse<T> function that returns a MaybeFalse<T> with an initial value of false.
 * @param value
 * @example
 *
 * let a: MaybeFalse<string> = false;
 * // can be written as
 * let a = MaybeFalse<string>();
 */
export function MaybeFalse<T = any>(value: MaybeFalse<T> = false): MaybeFalse<T> {
    return value;
}

/**
 * As is a type guard hack to make sure a value is of type T.
 *
 * @example
 * type Country = { id: number, name: string; code: string };
 * let country: Country = { id: 1, name: "Nigeria", code: "NG" }; // works
 *
 * // Without As
 * someFunction(<Country>{
 *   id: "1", // for some reason, this is allowed
 * });
 *
 * // With As
 * someFunction(As<Country>({
 *     id: "1", // this will throw an error
 * }));
 */
export function As<T>(v: T): T {
    return v;
}

/**
 * AsPartial is just like [as] but it makes sure a value is of type Partial<T>.
 * same as As<Partial<T>>();
 *
 * @example
 * type Country = { id: number, name: string; code: string };
 * let country: Partial<Country> = { id: 1, name: "Nigeria" }; // works
 *
 * // Without AsPartial
 * someFunction(<Partial<Country>>{
 *  id: "1", // for some reason, this is allowed
 * });
 *
 * // With AsPartial
 * someFunction(AsPartial<Country>({
 *  id: "1", // this will throw an error
 * }));
 */
export function AsPartial<T>(v: Partial<T>): Partial<T> {
    return v;
}

/**
 * ConstArray is a hack function that converts a readonly  array to an array.
 *
 * @example
 * const MyArray = ["a", "b", "c"] as const;
 * let a: string[] = MyArray; // this will throw an error
 * let b: string[] = ConstArray(MyArray); // this will work
 */
export function ConstArray<T>(arr: readonly T[]): T[] {
    return arr as unknown as T[];
}
