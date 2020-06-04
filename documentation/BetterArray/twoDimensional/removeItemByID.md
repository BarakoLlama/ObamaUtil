# removeItemByID
## Parameters
### id
Number(): The index of the item to remove
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = new ObamaUtil.BetterArray()
const myArray = new ba.twoDimensional([], [])
myArray.addItem("firefighters", 10)
myArray.addItem("police", 15)
myArray.addItem("ems", 12)
myArray.removeItemByID(0)
// Removes the item that has the index of 0
```