/**
 * This file will generate the exports for the projects package.json
 */

import path from "node:path";
import fs from "node:fs";
import fileMap from "./file-map.js";

const exportsList: Record<string, { import: string; require: string; types: string }> = {};

for (const file of fileMap) {
    let dir = path.dirname(file);

    // remove "./" from the start of the string
    if (dir.startsWith("./")) dir = dir.slice(2);

    exportsList[`./${dir}/*`] = {
        import: `./dist/${dir}/*.js`,
        require: `./dist/${dir}/*.cjs`,
        types: `./dist/${dir}/*.d.ts`
    };
}

// read the package.json file
const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

// add the exports to the package.json file
packageJson.exports = exportsList;

// write the package.json file
fs.writeFileSync("./package.json", JSON.stringify(packageJson, null, 2));

// log the exports
console.log(exportsList);
console.log("Exports generated successfully!");
