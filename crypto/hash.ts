import { createHash } from "node:crypto";

/**
 * Create Md5 hash function
 * @param str
 */
export function md5(str: string): string {
    return createHash("md5").update(str).digest("hex");
}

/**
 * base64 encode
 * @param str
 */
export function base64(str: string): string {
    return Buffer.from(str).toString("base64");
}

/**
 * base64 decode
 * @param str
 */
export function base64Decode(str: string): string {
    return Buffer.from(str, "base64").toString();
}
