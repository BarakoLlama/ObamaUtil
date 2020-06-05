# name
## Parameters
### There are no parameters.
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = ObamaUtil.BetterArray
const myArray = new ba.oneDimensional([])
myArray.stringify()
// Returns the array but with a comma between each element. This function
// assumes that the array only consists of numbers, strings, or other interfaces
// that can be logged without any extra processing.
```