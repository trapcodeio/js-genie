import { test } from "@japa/runner";
import { chunkArray } from "../array/manipulate.js";

test.group("Array", () => {
    test("chunkArray", ({ assert }) => {
        const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
        assert.deepEqual(result, [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8]
        ]);
    });
});
