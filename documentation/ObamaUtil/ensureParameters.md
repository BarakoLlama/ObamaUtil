# ensureParameters
## Parameters
### parameters
Array(): The array to scan for
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const obama = new ObamaUtil()
obama.ensureParameters(["hello", undefined])
// Returns true if none of the elements are undefined. Otherwise returns false.
```