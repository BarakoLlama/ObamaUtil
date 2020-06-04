# save
## Parameters
### path
String(): The file to save to
### callback
Function(): The callback for errors
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = new ObamaUtil.BetterArray()
const myArray = new ba.typeJson({})
myArray.save("./myfile", (err) => {
    if(err){throw new Error(err)}
})
// Saves the JSON into a file, and throws an error if one happens.
```