# toNumber
## There are no parameters.
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const math = ObamaUtil.Math
var giantInt = new math.GiantInt(1.337)
console.log(giantInt.toNumber())
// Returns the number used by the GiantInt. Numbers above 1.7e309 are likely to return
// an invalid response as JavaScript cannot handle numbers above around that point.
// To always get the proper number, use the method toString().
```