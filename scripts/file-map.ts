/**
 * This file will create the file map for the project.
 * The file map is a json file that contains the file paths
 * It will be used by the build script to create the final bundle
 */
import { As } from "../utils/typescript.js";

export default As<string[]>([
    "./array/manipulate.ts",
    "./crypto/hash.ts",
    "./errors/lazy-try-catch.ts",
    "./string/limit.ts",
    "./utils/functions.ts",
    "./utils/typescript.ts"
]);
