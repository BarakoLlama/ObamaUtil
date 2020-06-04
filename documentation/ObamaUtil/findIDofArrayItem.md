# findIDofArrayItem
## Parameters
### array
Array(): The array to search
### equals
any: What to find in the array
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const obama = new ObamaUtil.ObamaUtil()
obama.findIDofArrayItem([1, "hello", false], "hello")
// Returns the index number where the array item equals the wanted item.
// In this example, returns 1.
```