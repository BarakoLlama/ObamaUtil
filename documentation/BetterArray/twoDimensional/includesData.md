# includesData
## Parameters
### item
any: The data to search for
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = new ObamaUtil.BetterArray()
const myArray = new ba.twoDimensional([], [])
myArray.addItem("firefighters", 10)
myArray.addItem("police", 15)
myArray.addItem("ems", 12)
myArray.includesName(12)
// Returns if the array of data includes the item, or in this case, true.
```