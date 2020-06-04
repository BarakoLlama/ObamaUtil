# getItemByName
## Parameters
### name
any: The name to search for and remove
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = new ObamaUtil.BetterArray()
const myArray = new ba.twoDimensional([], [])
myArray.addItem("firefighters", 10)
myArray.addItem("police", 15)
myArray.addItem("ems", 12)
myArray.getItemByName("police")
// Finds the data that is tied with the name, or in this example, 15.
```