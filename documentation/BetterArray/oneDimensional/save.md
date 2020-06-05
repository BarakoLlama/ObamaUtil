# name
## Parameters
### path
String(): The file to save to
### callback
Function(): The callback for errors
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = ObamaUtil.BetterArray
const myArray = new ba.oneDimensional([])
myArray.save("./myfile", (err) => {
    if(err){
        throw new Error(err)
    }
})
// Saves the one dimensional and throws an error if one happened.
```