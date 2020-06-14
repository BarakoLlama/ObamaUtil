# getArgs
## There are no parameters.
## Example
Consider the script below.
```javascript
const ObamaUtil = require("ObamaUtil")
console.log(ObamaUtil.ObamaUtil.getArgs())
```
Running the bash code below results in the following output;
```
node ./myscript.js myarg1 myarg2
```
```javascript
["myarg1", "myarg2"]
```