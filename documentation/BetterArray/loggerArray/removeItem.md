# removeItem
## Parameters
### item
String(): The item to remove
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = new ObamaUtil.BetterArray()
const myArray = new ba.loggerArray(["Hello", "world"])
myArray.removeItem("Hello")
// Removes the item "Hello" from the logger array
```