# removeItem
## Parameters
### name
any: The item to remove
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = new ObamaUtil.BetterArray()
const myArray = new ba.oneDimensional([])
myArray.addItem("apple")
myArray.addItem("strawberry")
myArray.removeItem("apple")
// Removes "apple" from myArray
```