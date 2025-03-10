import { test } from "@japa/runner";
import { tryCatch, tryResolve } from "../errors/lazy-try-catch.js";

test.group("Errors", () => {
    test("tryCatch", ({ assert }) => {
        function throwError($throw: boolean) {
            if ($throw) {
                throw new Error("Error");
            }

            return "No error";
        }

        const [value, error] = tryCatch(() => throwError(false));

        assert.equal(value, "No error");
        assert.isUndefined(error);

        const [value2, error2] = tryCatch(() => throwError(true));

        assert.isUndefined(value2);
        assert.isDefined(error2);

        if (error2) assert.equal(error2.message, "Error");
    });

    test("resolve", async ({ assert }) => {
        const [value, error] = await tryResolve(() => Promise.resolve("No error"));

        assert.equal(value, "No error");
        assert.isUndefined(error);

        const [value2, error2] = await tryResolve(() => Promise.reject(new Error("Promise Error")));

        assert.isUndefined(value2);
        assert.isDefined(error2);

        if (error2) assert.equal(error2.message, "Promise Error");
    });
});
