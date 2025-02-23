# number/human

This file contains functions that have to deal with `humanizing` numbers for better readability.

## Functions

- [intToFileSize](#inttofilesize) - Convert integer to human-readable file size.


### intToFileSize
Convert integer to human-readable file size.

```ts
import {intToFileSize} from "js-genie/number/human";

intToFileSize(1024) // 1KB
intToFileSize(1024 * 1024) // 1MB
intToFileSize(1024 * 1024 * 1024) // 1GB

// With custom precision
intToFileSize(1500, 2) // 1.46KB
```