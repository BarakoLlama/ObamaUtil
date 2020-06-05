# addItem
## Parameters
### name
any: The variable name to add
### data
any: The data to add that goes with the name
## Example
```javascript
const ObamaUtil = require('ObamaUtil')
const ba = ObamaUtil.BetterArray
const myArray = new ba.typeJson({})
myArray.addItem("amountOfPeople", 5)
// Adds a new item to myArray with amountOfPeople=5.
```