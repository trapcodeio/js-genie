import { test } from "@japa/runner";
import { call, compute } from "../utils/functions.js";
import { As, AsPartial, ConstArray, Maybe, MaybeFalse, MaybeNull } from "../utils/typescript.js";

test.group("Utils", () => {
    test("compute", ({ assert }) => {
        const form = { name: "john", age: 17 }; // age is optional
        const ageError = compute(form.age, (v) => {
            // run some checks or computations
            if (v > 18) {
                return "You can come to our party";
            } else {
                return "Sorry, You are not invited";
            }
        });

        assert.equal(ageError, "Sorry, You are not invited");
    });

    test("call", ({ assert }) => {
        const number = "+1 234 567 890";
        const formattedNumber = call(() => {
            // run some checks or computations
            // e.g., remove all spaces
            return number.replace(/ /g, "");
        });

        assert.equal(formattedNumber, "+1234567890");
    });
});

test.group("Utils - Typescript", () => {
    test("Maybe", ({ assert, expectTypeOf }) => {
        expectTypeOf<Maybe<any>>().toEqualTypeOf<any | undefined>();
        expectTypeOf<Maybe<string>>().toEqualTypeOf<string | undefined>();

        const a = Maybe<string>();
        assert.isUndefined(a);
        expectTypeOf(a).toEqualTypeOf<string | undefined>();

        const b = Maybe("Hello");
        assert.equal(b, "Hello");
        expectTypeOf(b).toEqualTypeOf<string | undefined>();
    });

    test("MaybeNull", ({ assert, expectTypeOf }) => {
        expectTypeOf<MaybeNull<any>>().toEqualTypeOf<any | null>();
        expectTypeOf<MaybeNull<string>>().toEqualTypeOf<string | null>();

        const a = MaybeNull<string>();
        assert.isNull(a);
        expectTypeOf(a).toEqualTypeOf<string | null>();

        const b = MaybeNull("Hello");
        assert.equal(b, "Hello");
        expectTypeOf(b).toEqualTypeOf<string | null>();
    });

    test("MaybeFalse", ({ assert, expectTypeOf }) => {
        expectTypeOf<MaybeFalse<any>>().toEqualTypeOf<any | false>();
        expectTypeOf<MaybeFalse<string>>().toEqualTypeOf<string | false>();

        const a = MaybeFalse<string>();
        assert.isFalse(a);
        expectTypeOf(a).toEqualTypeOf<string | false>();

        const b = MaybeFalse("Hello");
        assert.equal(b, "Hello");
        expectTypeOf(b).toEqualTypeOf<string | false>();
    });

    test("As", ({ assert, expectTypeOf }) => {
        const a = As("Hello World");
        assert.equal(a, "Hello World");
        expectTypeOf(a).toEqualTypeOf<string>();

        const arr = As<string[]>(["a", "b", "c"]);
        assert.deepEqual(arr, ["a", "b", "c"]);
        expectTypeOf(arr).toEqualTypeOf<string[]>();
    });

    test("AsPartial", ({ assert, expectTypeOf }) => {
        type user = {
            name: string;
            age: number;
            email: string;
        };

        const a = AsPartial<user>({ name: "John" });
        assert.deepEqual(a, { name: "John" });
        expectTypeOf(a).toEqualTypeOf<Partial<user>>();
    });

    // test("ConstArray", ({ assert, expectTypeOf }) => {
    //     const MyArray = ["a", "b", "c"] as const;
    //     expectTypeOf(MyArray).toEqualTypeOf<readonly ["a", "b", "c"]>();
    //
    //     const strArr = ConstArray(MyArray);
    //     assert.deepEqual(strArr, ["a", "b", "c"]);
    //     expectTypeOf(strArr).toEqualTypeOf<string[]>();
    // });
});
