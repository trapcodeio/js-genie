import { test } from "@japa/runner";
import { strLimit, strLimitWords } from "../string/limit.js";
import { strSize } from "../string/stats.js";

test.group("Strings", () => {
    test("strLimit", ({ assert }) => {
        const result = strLimit("Do have a lovely day", 14, "...");
        assert.equal(result, "Do have a love...");
    });

    test("strLimitWordsByLength", ({ assert }) => {
        const result = strLimit("Do have a lovely day", 14, "...");
        assert.equal(result, "Do have a love...");
    });

    test("strLimitWords", ({ assert }) => {
        const result = strLimitWords("Do have a lovely day.", 4, "...");
        assert.equal(result, "Do have a lovely...");
    });

    test("strSize", ({ assert }) => {
        const result = strSize("Hello World");
        assert.equal(result, 11);
    });
});
