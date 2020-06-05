# ping
## Parameters
### host
String(): The host (ex. "google.com")
### port
Number(): The port (ex. 8080)
### callback
Function(): See example for instance of callback.
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
var internet = ObamaUtil.Internet
internet.isPortAvailable("google.com", 80, (cb) => {
    console.log(cb)
})
// Returns the amount of milliseconds the response took, or the ping.
```