# toJSON
## Parameters
### There are no parameters.
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = new ObamaUtil.BetterArray()
const myArray = new ba.twoDimensional([], [])
var myJson = myArray.toJSON()
// Makes a new JSON using the data from the two dimensional.
```