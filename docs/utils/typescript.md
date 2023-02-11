# utils/typescript

This file contains functions that has to deal with `Typescript` types and hacks.

## Types

- [Maybe](#maybe)
- [MaybeNull](#maybenull)
- [MaybeFalse](#maybefalse)

## functions

- [As](#as)
- [AsPartial](#aspartial)
- [ConstArray](#constarray)


### Maybe
`Maybe<T>` is a **Type** that can be either `T` or `undefined`. same as `T | undefined`.

```ts
import {Maybe} from "js-genie/utils/typescript";

let a: Maybe<string>; // as (string | undefined)
let b: Maybe<number> = 1; // as (number | undefined)

a = "hello"; // ✅ ok
a = undefined; // ✅ ok
a = 1; // ❌ error

b = 1; // ✅ ok
b = undefined; // ✅ ok
b = "hello"; // ❌ error
```

### MaybeNull
`MaybeNull<T>` is a **Type** that can be either `T` or `null`. same as `T | null`.
It also has a function with same name that can be used to initialize a variable with `MaybeNull<T>` type.

```ts
import {MaybeNull} from "js-genie/utils/typescript";

let a: MaybeNull<string>; // as (string | null)
let b: MaybeNull<number> = 1; // as (number | null)

a = "hello"; // ✅ ok
a = null; // ✅ ok
a = 1; // ❌ error

b = 1; // ✅ ok
b = null; // ✅ ok
b = "hello"; // ❌ error

// Using function to initialize a variable with MaybeNull<T> type
let c = MaybeNull<string>(); // `null` as (string | null)
let d = MaybeNull(1); // `1` as (number | null)
```


### MaybeFalse
`MaybeFalse<T>` is a **Type** that can be either `T` or `false`. same as `T | false`.
It also has a function with same name that can be used to initialize a variable with `MaybeFalse<T>` type.

```ts
import {MaybeFalse} from "js-genie/utils/typescript";

let a: MaybeFalse<string>; // as (string | false)
let b: MaybeFalse<number> = 1; // as (number | false)

a = "hello"; // ✅ ok
a = false; // ✅ ok
a = 1; // ❌ error

b = 1; // ✅ ok
b = false; // ✅ ok
b = "hello"; // ❌ error

// Using function to initialize a variable with MaybeFalse<T> type

let c = MaybeFalse<string>(); // `false` as (string | false)
let d = MaybeFalse(1); // `1` as (number | false)
```

### As
`As<T>()` is a **Type** guard hack **function** that can be used to cast a value to a specific type.

```ts
import {As} from "js-genie/utils/typescript";

type Country = { id: number, name: string; code: string };
let country: Country = {id: 1, name: "Nigeria", code: "NG"}; // works

const someFunction = (country: object) => {}

// Without As
someFunction(<Country>{id: 1, hello: "world"});
someFunction({id: 1, hello: "world"} as Country);

// the above will not throw error 
// despite the presence of a new property `hello`
// And the absence of the `name` and `code` properties



// With As
someFunction(As<Country>({id: 1, hello: "world"}));

// the code above will throw an error 
// because the name and code properties are missing
// and the hello property is not part of the Country type
```

### AsPartial
AsPartial is just like [as](#as), but it makes sure a value is of type Partial<T>. same as `As<Partial<T>>()`;


```ts
import {AsPartial} from "js-genie/utils/typescript";

type Country = { id: number, name: string; code: string };
let country: Country = {id: 1, name: "Nigeria", code: "NG"}; // works

const someFunction = (country: object) => {}

// Without AsPartial
someFunction(<Partial<Country>>{id: 1, hello: "world"});
someFunction({id: 1, hello: "world"} as Partial<Country>);

// the above will not throw error
// despite the presence of a new property `hello`

// With AsPartial
someFunction(AsPartial<Country>({id: 1, hello: "world"}));

// the code above will throw an error
// because the hello property is not part of the Country type
```


### ConstArray
ConstArray is a hack function that converts a `readonly` array to an array.

```ts
import {ConstArray} from "js-genie/utils/typescript";

const PaymentMethods = ["cash", "card", "bank"] as const;
const someFunction = (paymentMethods: string[]) => {}

// Without ConstArray
someFunction(PaymentMethods); // ❌ error

// With ConstArray
someFunction(ConstArray(PaymentMethods)); // ✅ ok

ConstArray(PaymentMethods) // string[]
```