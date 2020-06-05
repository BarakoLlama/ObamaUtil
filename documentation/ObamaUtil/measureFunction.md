# measureFunction
## Parameters
### func
Function(): The code to execute
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
var obama = ObamaUtil.ObamaUtil
var measure = obama.measureFunction({
    console.log("Hello, World!")
})
console.log(measure)
// Returns how many milliseconds the code block took to execute.
// This is a sync'd function.
```