# removeItemByData
## Parameters
### data
any: The data to search for and remove
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = ObamaUtil.BetterArray
const myArray = new ba.typeJson({})
myArray.addItem("firefighters", 10)
myArray.addItem("police", 15)
myArray.addItem("ems", 12)
myArray.removeItemByData(10)
// Removes the item that has the data 10
```