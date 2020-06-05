# includesName
## Parameters
### item
any: The name to search for
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = ObamaUtil.BetterArray
const myArray = new ba.typeJson({})
myArray.addItem("firefighters", 10)
myArray.addItem("police", 15)
myArray.addItem("ems", 12)
myArray.includesName("ems")
// Returns if the JSON of names includes the item, or in this case, true.
```