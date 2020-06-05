# ObamaUtil.Internet.get
## Parameters
### URL
String(): The URL to get
## func
(response, error) => {}: The response to the URL 
## Example
```javascript
const ObamaUtil = require("./ObamaUtil")
ObamaUtil.Internet.get("https://www.google.com/", (response, error) => {
    console.log(response.body)
})
// Logs the body of google.com
```