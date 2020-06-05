# addItem
## Parameters
### item
String(): What to log to the object
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = ObamaUtil.BetterArray
const myArray = new ba.loggerArray([])
myArray.addItem("Something happened!")
// Logs an item into the object
```