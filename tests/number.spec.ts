import { test } from "@japa/runner";
import { intToFileSize } from "../number/human.js";
import { randomFloat, randomInt } from "../number/rand.js";

test.group("Number", () => {
    test("intToFileSize", ({ assert }) => {
        assert.equal(intToFileSize(1024), "1 KB");
        assert.equal(intToFileSize(1024, 0), "1 KB");
        assert.equal(intToFileSize(1024, 1), "1 KB");
        assert.equal(intToFileSize(2324, 1), "2.3 KB");

        // test all sizes starting from bytes
        assert.equal(intToFileSize(0), "0 Bytes");
        assert.equal(intToFileSize(1), "1 Bytes");
        assert.equal(intToFileSize(1024), "1 KB");
        assert.equal(intToFileSize(1024 * 1024), "1 MB");
        assert.equal(intToFileSize(1024 * 1024 * 1024), "1 GB");
        assert.equal(intToFileSize(1024 * 1024 * 1024 * 1024), "1 TB");
        assert.equal(intToFileSize(1024 * 1024 * 1024 * 1024 * 1024), "1 PB");
        assert.equal(intToFileSize(1024 * 1024 * 1024 * 1024 * 1024 * 1024), "1 EB");
        assert.equal(intToFileSize(1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024), "1 ZB");
        assert.equal(intToFileSize(1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024), "1 YB");
    });

    test("randomInt", ({ assert }) => {
        const randInt = randomInt(100, 200);
        assert.isTrue(randInt >= 100 && randInt <= 200);
    });

    test("randomFloat", ({ assert }) => {
        const randFloat = randomFloat(1.1, 1.9);
        assert.isTrue(randFloat >= 1.1 && randFloat <= 1.9);
    });
});
