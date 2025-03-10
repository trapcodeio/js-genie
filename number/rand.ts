/**
 * Returns a random number between min and max.
 * @param min
 * @param max
 *
 * @example
 * randomInt(1, 10) // 4
 * randomInt(1, 10) // 7
 */
export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Returns a random float between min and max.
 * @param min
 * @param max
 * @example
 * randomFloat(1, 10) // 4.123456
 * randomFloat(1, 10) // 7.54321
 * randomFloat(1, 10) // 9.123456
 */
export function randomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}
