/**
 * Compute - use a value to compute a result.
 * @param val - value to use
 * @param fn - compute function
 *
 * @example
 * const form = {name: "john", age: 17} // age is optional
 * const ageError = compute(form.age, (v) => {
 *     // run some checks or computations
 *     if(v > 18) {
 *      return "You can come to our party";
 *     } else {
 *      return "Sorry, You are not invited"
 *     }
 * })
 *
 * // ageError will be "Sorry, You are not invited"
 */
export function compute<R = any, V = R>(val: V, fn: (val: V) => R): R {
    return fn(val);
}

/**
 * Compute - a simple way of calling an inline function.
 * @param fn - The function to call
 *
 * @example
 * const number = "+1 234 567 890";
 * const formattedNumber = computeFunc(() => {
 *      // run some checks or computations
 *     return number.replace(/\D/g, "");
 * }); // returns "+1234567890"
 *
 */
export function computeFunc<R = any>(fn: () => R): R {
    return fn();
}
