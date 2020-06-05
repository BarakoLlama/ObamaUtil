# ensureArrayIsOfType
## Parameters
### array
Array(): The array to scan
### type
String(): The type to make sure the array consists of
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const obama = ObamaUtil.ObamaUtil
obama.ensureArrayIsOfType([1, 6, 2, 15, 0], "number")
// Returns whether all the elements of the array are of the type requested, or
// in this example, true.
```