/**
 * This file will generate the exports for the projects package.json
 */

// import path from "node:path";
import fs from "node:fs";
import fileMap from "./file-map.js";

const exportsList: Record<string, { import: string; require: string; types: string }> = {};

for (let file of fileMap) {
    // remove .ts from file
    file = file.replace(".ts", "");
    let distFile = "./dist/" + file.slice(2);

    exportsList[file] = {
        import: distFile + ".js",
        require: distFile + ".cjs",
        types: distFile + ".d.ts"
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
