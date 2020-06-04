# toOneDimensional
## Parameters
### There are no parameters.
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = new ObamaUtil.BetterArray()
const myArray = new ba.typeJson({})
myArray.toOneDimensional()
// Returns new ObamaUtil.BetterArray.twoDimensional with the data given
// via the JSON input. Assumes that data are strings or numbers.
// REMEMBER THAT ALL NAMES ARE THROWN AWAY!
```