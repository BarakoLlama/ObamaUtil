# getItemByID
## Parameters
### id
Number(): The index to find
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = new ObamaUtil.BetterArray()
const myArray = new ba.twoDimensional([], [])
myArray.addItem("firefighters", 10)
myArray.addItem("police", 15)
myArray.addItem("ems", 12)
myArray.getItemByID(1)
// Finds both the name and data that ire tied with the index, or in this example, 
// ["police", 15]
```