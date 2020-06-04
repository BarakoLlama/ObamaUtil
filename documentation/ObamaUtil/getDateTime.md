# getDateTime
## Parameters
### now
Date(): The date object used to get the string
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const obama = new ObamaUtil.ObamaUtil()
obama.getDateTime(new Date(Date.now()))
// Returns the date in the format MM/DD Hour:Min:Sec ex. 06/09 04:20:17
```