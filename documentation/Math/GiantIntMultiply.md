# GiantIntMultiply
## Parameters
### partOne
class GiantInt(): The first GiantInt to multiply
### partTwo
class GiantInt(): The second GiantInt to multiply
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const math = ObamaUtil.Math
var giantIntOne = new math.GiantInt(3)
var giantIntTwo = new math.GiantInt(2)
var addedInts = math.GiantIntMultiply(giantIntOne, giantIntTwo)
// Makes a new GiantInt by multiplying the two ints.
```