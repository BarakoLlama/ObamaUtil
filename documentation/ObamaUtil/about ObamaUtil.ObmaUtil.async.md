Async functions are the same as synced functions, but instead use promises 
so that you can have multiple functions running at once for better performance.

Here is a list of async functions!
* getDateTime
* highestNumberOfArray
* getIDFromHighestNumberOfArray
* numberOfArrayClosestToZero
* IDOfNumberOfArrayClosestToZero
* getAverageOfArray
* findMaxOfArray
* findMinOfArray
* findIDofArrayItem
* sortLowToHigh
* sortHighToLow
* replaceAllElements
* massFileCreate

Note: massFileCreate has no callback but is still async.

Example:
```javascript
const ObamaUtil = require('ObamaUtil')
var asyncFunctions = ObamaUtil.ObamaUtil.async
asyncFunctions.sortLowToHigh([1, 7, 3, 9])
```