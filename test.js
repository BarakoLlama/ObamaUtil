const ObamaUtil = require("./ObamaUtil")
ObamaUtil.Internet.get("https://www.google.com/", (response, error) => {
    console.log(response.body)
})