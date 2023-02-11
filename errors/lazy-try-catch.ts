/**
 * Try Catch functions using Go-Lang style of handling errors.
 * Returns and array of error and data.
 *
 * error will be undefined if there is no error.
 * @param fn
 */
export function tryCatch<T, E = Error>(fn: () => T): [T, undefined] | [undefined, E] {
    try {
        return [fn(), undefined]
    } catch (e: unknown) {
        return [undefined, e as E]
    }
}


/**
 * Try Catch Promises using Go-Lang style of handling errors.
 * Returns and array of error and data.
 *
 * error will be undefined if there is no error.
 * @param promiseFn
 */
export async function resolve<T, E = Error>(promiseFn: () => Promise<T>): Promise<[T, undefined] | [undefined, E]> {
    try {
        return [await promiseFn(), undefined]
    } catch (e: unknown) {
        return [undefined, e as E]
    }
}