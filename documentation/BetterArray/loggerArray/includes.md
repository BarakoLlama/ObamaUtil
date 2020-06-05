# includes
## Parameters
### item
String(): The item to scan for
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = ObamaUtil.BetterArray
const myArray = new ba.loggerArray(["apple", "bananna", "lemon"])
myArray.includes("strawberry")
// Returns whether or not the logger array includes the item, which in this case,
// is false.
```