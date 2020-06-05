# save
## Parameters
### path
String(): The file to save to
### callback
Function(): The callback for errors
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = ObamaUtil.BetterArray
const myArray = new ba.loggerArray([])
myArray.save("./myfile", (err) => {
    if(err){
        throw new Error(err)
    }
})
// Saves the log as a file and throws an error in the case of one.
```