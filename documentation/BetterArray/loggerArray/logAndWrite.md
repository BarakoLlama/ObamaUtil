# logAndWrite
## Parameters
### item
String(): What to log to the object and log to the console
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = new ObamaUtil.BetterArray()
const myArray = new ba.loggerArray([])
myArray.logAndWrite("Something happened!")
// Logs an item into the object and console
```