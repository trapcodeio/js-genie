import { defineConfig } from "tsup";

export default defineConfig((_options) => {
    return {
        entry: [],
        format: ["cjs"],
        // minify: !options.watch,
        outExtension: () => ({ js: `.js` }),
        dts: false,
        splitting: true,
        bundle: false,
        treeshake: false,
        clean: true,
        onSuccess: "cp ./dist.package.json ./dist/package.json"
    };
});
