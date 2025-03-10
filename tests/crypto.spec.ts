import { test } from "@japa/runner";
import { base64, base64Decode, md5 } from "../crypto/hash.js";

test.group("Crypto", () => {
    test("md5", ({ assert }) => {
        const str = "hello world";
        const hash = md5(str);

        assert.equal(hash, "5eb63bbbe01eeed093cb22bb8f5acdc3");
    });

    test("base64", ({ assert }) => {
        const str = "hello world";
        const encoded = base64(str);

        assert.equal(encoded, "aGVsbG8gd29ybGQ=");
    });

    test("base64Decode", ({ assert }) => {
        const str = "aGVsbG8gd29ybGQ=";
        const decoded = base64Decode(str);

        assert.equal(decoded, "hello world");
    });
});
