import { defineConfig } from "tsup";

export default defineConfig((_options) => {
    return {
        entry: [
            "./array/manipulate.ts",
            "./crypto/hash.ts",
            "./errors/lazy-try-catch.ts",
            "./string/limit.ts",
            "./utils/functions.ts",
            "./utils/typescript.ts"
        ],
        format: ["cjs"],
        // minify: !options.watch,
        outExtension: () => ({ js: `.cjs` }),
        dts: false,
        splitting: true,
        bundle: false,
        treeshake: true
        // clean: true
        // onSuccess: "cp ./dist.package.json ./dist/package.json"
    };
});
