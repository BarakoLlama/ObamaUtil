# MultiShift
## Parameters
### array
Array(): The array to shift multiple times
### amount
Number(): The amount of times to shift the given array.
### getType
String(): What to return;
'remainder' returns the remaining array after shifting
'shifted' returns an array of what was removed from the array
## Examples
```javascript
const ObamaUtil = require("ObamaUtil")
var myArray = [1, 3, 2, 4, 6, 5]
ObamaUtil.Math.MultiShift(myArray, 2, "remainder")
// Returns [2, 4, 6, 5]
```
```javascript
const ObamaUtil = require("ObamaUtil")
var myArray = [1, 3, 2, 4, 6, 5]
ObamaUtil.Math.MultiShift(myArray, 2, "shifted")
// Returns [1, 3]
```