# toNumber
## There are no parameters.
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const math = ObamaUtil.Math
var giantInt = new math.GiantInt(1.337)
console.log(giantInt.toString())
// Returns the number used by the GiantInt in the format XeY, where XeY = x*10^Y
```