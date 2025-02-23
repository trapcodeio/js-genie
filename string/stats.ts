/**
 * String Size
 * Calculate size of string in bytes.
 *
 * @param str - The string to calculate the size of.
 * @example
 * strSize("Hello World") // Returns 11
 */
export function strSize(str: string): number {
    // Using TextEncoder to get the byte length in UTF-8 encoding
    const encoder = new TextEncoder();
    const encoded = encoder.encode(str);
    return encoded.length;
}
