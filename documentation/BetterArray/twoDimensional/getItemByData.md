# getItemByData
## Parameters
### data
any: The data to search for and remove
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = new ObamaUtil.BetterArray()
const myArray = new ba.twoDimensional([], [])
myArray.addItem("firefighters", 10)
myArray.addItem("police", 15)
myArray.addItem("ems", 12)
myArray.getItemByData(15)
// Finds the name that is tied with the data, or in this example, "police".
```