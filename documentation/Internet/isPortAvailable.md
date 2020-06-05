# isPortAvailable
## Parameters
### host
String(): The host (ex. "google.com")
### port
Number(): The port (ex. 8080)
## callback
Function(): See example for instance of callback.
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
var internet = ObamaUtil.Internet
internet.isPortAvailable("google.com", 80, (cb) => {
    console.log(cb)
})
// Returns true if there is no response, and returns false if there is a response from the server.
// This is a async function, which means that this function can be called alongside other functions
// to be executed at the same time for better preformance.
```