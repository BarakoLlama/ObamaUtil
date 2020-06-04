# easyWrite
## Parameters
### type
String(): Indicates the source of the logging, such as "Script" or "Debug".
### message
String(): The message coming from the source of logging
### showTime
Boolean(): (OPTIONAL) Show the time that the message was sent?
### typeColor
String(): (OPTIONAL) The color of the type
### messageColor
String(): (OPTIONAL) The color of the message
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const obama = new ObamaUtil()
obama.easyWrite("ERROR", "Something happened!", true, red)
// Writes "MM/DD Hour:Minute:Second ERROR Something happened!" to the screen
```