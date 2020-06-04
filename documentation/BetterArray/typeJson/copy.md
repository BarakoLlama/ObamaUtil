# copy
## Parameters
### There are no parameters.
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = new ObamaUtil.BetterArray()
const myArray = new ba.typeJson({})
var copyOfMyArray = myArray.copy()
// Duplicates the JSON type. Can also be used to get the JSON type.
```