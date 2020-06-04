# toTypeJSON
## Parameters
### There are no parameters.
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = new ObamaUtil.BetterArray()
const myArray = new ba.twoDimensional([], [])
var myJsonArray = myArray.toTypeJSON()
// Makes a new ObamaUtil.BetterArray.typeJson using the data from the two dimensional.
```