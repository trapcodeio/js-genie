import { defineConfig } from "tsup";
import fileMap from "./scripts/file-map.js";

export default defineConfig((_options) => {
    return {
        entry: fileMap,
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
