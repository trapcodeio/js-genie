type TryCatch<T, E = Error> = [T, undefined] | [undefined, E];

/**
 * Try Catch functions using Go-Lang style of handling errors.
 * Returns and array of error and data.
 *
 * error will be undefined if there is no error.
 * @param fn
 */
export function tryCatch<T, E = Error>(fn: () => T): TryCatch<T, E> {
    try {
        return [fn(), undefined];
    } catch (e: unknown) {
        return [undefined, e as E];
    }
}

/**
 * Try Catch Promises using Go-Lang style of handling errors.
 * Returns and array of error and data.
 *
 * error will be undefined if there is no error.
 * @param promiseFn
 */
async function resolve<T, E = Error>(promiseFn: () => Promise<T>): Promise<TryCatch<T, E>> {
    try {
        return [await promiseFn(), undefined];
    } catch (e: unknown) {
        return [undefined, e as E];
    }
}

export {
    // @alias `tryCatch` as `tc`
    tryCatch as tc,

    // @alias `resolve` as `tr`
    resolve as tryResolve,

    // @alias `resolve` as `tr`
    resolve as tr
};
