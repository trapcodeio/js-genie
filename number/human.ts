/**
 * Convert a number to a human-readable file size.
 * @param size
 * @param decimals
 * @example
 * intToFileSize(1024) // 1 KB
 * intToFileSize(1024, 0) // 1 KB
 * intToFileSize(1024, 1) // 1.0 KB
 * intToFileSize(1024, 2) // 1.00 KB
 */
export function intToFileSize(size: number, decimals = 2) {
    const bytes = size;
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}
