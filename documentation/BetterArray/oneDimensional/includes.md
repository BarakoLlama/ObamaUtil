# includes
## Parameters
### item
any: The item to search for
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = ObamaUtil.BetterArray
const myArray = new ba.oneDimensional([])
myArray.addItem("apple")
myArray.addItem("lemon")
myArray.includes("apple")
// Returns true because one of the elements are "apple".
```