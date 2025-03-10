# number/rand

This file contains functions that have to deal with `random` numbers.

## Functions

- [randomInt](#randomint) - Generate a random integer between two numbers.
- [randomFloat](#randomfloat) - Generate a random float between two numbers.


### randomInt
Generate a random integer between two numbers.

```ts
import {randomInt} from "js-genie/number/rand";

randomInt(1, 10) // 5
randomInt(1, 10) // 7
randomInt(1, 10) // 2
```


### randomFloat
Generate a random float between two numbers.

```ts
import {randomFloat} from "js-genie/number/rand";

randomFloat(1, 10) // 5.5
randomFloat(1, 10) // 7.3
randomFloat(1, 10) // 2.1
```