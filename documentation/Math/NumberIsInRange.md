# NumberIsInRange
## Parameters
### number
Number(): The number to check if is in range
### pointer
Number(): The base number
### range
Number(): The range from the base number to check for
## Example
```javascript
const ObamaUtil = require("ObamaUtil")
ObamaUtil.Math.NumberIsInRange(6, 10, 4)
// Returns true, because 6 is between or equal to (10-4) and (10+4)
ObamaUtil.Math.NumberIsInRange(20, 13, 6)
// Returns false, because 20 is not between or equal to (13-6) and (13+6)
```