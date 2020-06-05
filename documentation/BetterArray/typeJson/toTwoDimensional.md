# toTwoDimensional
## Parameters
### There are no parameters.
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = ObamaUtil.BetterArray
const myArray = new ba.typeJson({})
myArray.toTwoDimensional()
// Returns new ObamaUtil.BetterArray.twoDimensional with the names and data given
// via the JSON input. Assumes that all names and data are strings or numbers.
```