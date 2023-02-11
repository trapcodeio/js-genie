# utils/functions

This file contains functions that has to deal with `functions` 🤣

## Functions

- [compute](#compute) - Compute a result using a value and a function
- [call](#call) - A neater way to call an inline function

### compute

Compute a result using a value and a function

```ts
import {compute} from "js-genie/utils/functions";

compute(2, (value) => value * 2) // 4

// a little bit more complex
compute(2, (value) => {
    const result = value * 2;
    return result + 1;
}) // 5
```


### call

A neater way to call an inline function

```ts
import {call} from "js-genie/utils/functions";

const formattedDate = call(() => {
    const date = new Date();
    return date.toLocaleDateString();
});

// is the same as
const formattedDate = (() => {
    const date = new Date();
    return date.toLocaleDateString();
})();
```

