# errors/lazy-try-catch

This file contains functions that has to deal with boycotting forceful `try` and `catch`.

## Functions

- [tryFn](#tryfn) - Try and catch functions.
- [resolve](#resolve) - Try and catch promises.

### tryFn

Try and catch functions.

```ts
import {tryCatch as t} from "@trapcodeio/js-toolbox/errors/lazy-try-catch";

let [value, err] = t(() => {
    // Do something
});

console.log(value) // returned value
console.log(err) // Error Stack
```

### resolve

Try and catch promises.

```ts
import {resolve as r} from "@trapcodeio/js-toolbox/errors/lazy-try-catch";

let [value, err] = await r(User.find({name: 'john'}));

console.log(value) // returned value if no error.
console.log(err) // Error Stack
```

