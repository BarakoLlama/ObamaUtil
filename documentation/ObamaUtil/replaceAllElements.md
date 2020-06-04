# replaceAllElements
## Parameters
### string
String(): the string to replace
### find
String(): What to find
### replace
String(): What to replace what was found with
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const obama = new ObamaUtil.ObamaUtil()
obama.replaceAllElements("aabcax", "a", "y")
// Returns the same string but with all instances of "a" replaced with "y", or
// in this example, "yybcyx"
```