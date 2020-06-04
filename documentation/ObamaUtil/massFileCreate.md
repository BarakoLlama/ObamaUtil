# massFileCreate
## Parameters
### path
String(): The starting path to create a lot of files
The path **must** end in a "/", or for example, "./mydirectory/"
### files
Array(String()): List of files to create in the path
### optionalData
String(): (OPTIONAL) Data to write to the files
If you use this variable, what is inputted is what will be written to all the files given.
### optionalFileExtension
String(): (OPTIONAL) The file extension to add to the files
The file extension **must** start with ".", or for example, ".txt"
### optionalEnableLogging
Boolean(): (OPTIONAL) Enables logging of when a file is finished if set to true
## Examples
### Making files with the same extension
```javascript
const ObamaUtil = require('./ObamaUtil')
const obama = new ObamaUtil.ObamaUtil()
obama.massFileCreate("./mydirectory/", ["file1", "file2", "file3", "file4", "file5"], undefined, ".txt")
```
### Making files with different extensions
```javascript
const ObamaUtil = require('./ObamaUtil')
const obama = new ObamaUtil.ObamaUtil()
obama.massFileCreate("./mydirectory/", ["file1.txt", "file2.pdf", "file3.jpg", "file4.mp4", "file5.js"])
```
### Making files with the same data
```javascript
const ObamaUtil = require('./ObamaUtil')
const obama = new ObamaUtil.ObamaUtil()
obama.massFileCreate("./mydirectory/", ["file1", "file2", "file3", "file4", "file5"], "Hello, World!")
```