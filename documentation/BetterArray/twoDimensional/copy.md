# copy
## Parameters
### There are no parameters.
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = new ObamaUtil.BetterArray()
const myArray = new ba.twoDimensional([], [])
var copyOfMyArray = myArray.copy()
// Duplicates the two dimensional. Can also be used to get the two dimensional.
```