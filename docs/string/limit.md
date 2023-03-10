# string/limit

This file contains functions that has to deal with `limiting` strings.

## Functions

- [strLimit](#strlimit) - Limit string to defined length
- [strLimitWords](#strlimitwords) - Limit string by words.
- [strLimitWordsByLength](#strlimitwordsbylength) - Limit string to defined length without cutting words short.

### strLimit

Limit string to defined length

```ts
import {strLimit} from "js-genie/string/limit";

strLimit("Do have a lovely day", 14, "...")

// "Do have a love..."
```

### strLimitWords

Limit string by words.

```ts
import {strLimitWords} from "js-genie/string/limit";

strLimitWords("Do have a lovely day.", 4, "...")

// "Do have a lovely..."
```

### strLimitWordsByLength

Limit string to defined length without cutting words short.

```ts
import {strLimitWordsByLength} from "js-genie/string/limit";

strLimit("Do have a lovely day", 14, "...")
// "Do have a love..." 
// lovely is cut short

strLimitWordsByLength("Do have a lovely day", 14, "...")
// "Do have a..."
// lovely is not included.
```

