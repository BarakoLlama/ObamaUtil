// GitHub/BarakoLlama \\

const colors = require('colors')
const fs = require('fs')
const http = require('http')
const keypress = require('keypress')

keypress(process.stdin)

exports.ObamaUtil = {
    async: {
        async getDateTime(now = Date()){
            return new Promise(resolve => {
                var date = now
                var hour = date.getHours()
                hour = (hour < 10 ? "0" : "") + hour
                var min  = date.getMinutes()
                min = (min < 10 ? "0" : "") + min
                var sec  = date.getSeconds()
                sec = (sec < 10 ? "0" : "") + sec
                var month = date.getMonth() + 1
                month = (month < 10 ? "0" : "") + month
                var day  = date.getDate()
                day = (day < 10 ? "0" : "") + day
                resolve(month + "/" + day + " " + hour + ":" + min + ":" + sec)
            })
        },
        async highestNumberOfArray(array = Array()){
            return new Promise(resolve => {
                let highestNumber = Number.MIN_SAFE_INTEGER
                array.forEach(function(number){
                    if(number > highestNumber){highestNumber = number}
                })
                resolve(highestNumber)
            })
        },
        async getIDFromHighestNumberOfArray(array = Array(Number())){
            return new Promise(resolve => {
                let highestNumber = Number.MIN_SAFE_INTEGER
                array.forEach(function(number){
                    if(number > highestNumber){highestNumber = number}
                })
                let trueIndex
                array.find(function(currentValue, index){
                    if(currentValue == highestNumber){
                        trueIndex = index
                        return true
                    }else{return false}
                })
                resolve(trueIndex)
            })
        },
        async numberOfArrayClosestToZero(array = Array(Number())){
            return new Promise(resolve => {
                function getError(out){
                    if(out > 0){return (out - 0)}
                    if(0 > out){return (0 - out)}
                    return 0
                }
                let closestNumber = Number.MIN_SAFE_INTEGER
                array.forEach(function(number){
                    if(getError(number) < getError(closestNumber)){closestNumber = number}
                })
                resolve(closestNumber)
            })
        },
        async IDOfNumberOfArrayClosestToZero(array = Array(Number())){
            return new Promise(resolve => {
                function getError(out){
                    if(out > 0){return (out - 0)}
                    if(0 > out){return (0 - out)}
                    return 0
                }
                let closestNumber = Number.MIN_SAFE_INTEGER
                array.forEach(function(number){
                    if(getError(number) < getError(closestNumber)){closestNumber = number}
                })
                let trueIndex
                array.find(function(currentValue, index){
                    if(currentValue == closestNumber){
                        trueIndex = index
                        return true
                    }else{return false}
                })
                resolve(trueIndex)
            })
        },
        async getAverageOfArray(array = Array(Number())){
            return new Promise(resolve => {
                let sum = 0
                let divisor = array.length
                array.forEach(function(number){
                    sum = sum + number
                })
                resolve(sum / divisor)
            })
        },
        async findMaxOfArray(array = Array()){
            return new Promise(resolve => {
                if(this.ensureArrayIsOfType(array, "number")){
                    let max = Number.MIN_SAFE_INTEGER
                    array.forEach(function(num){
                        if(num > max){max = num}
                    })
                    resolve(max)
                }else{
                    throw new Error("Array contains something that is not a number.")
                }
            })
        },
        async findMinOfArray(array = Array()){
            return new Promise(resolve => {
                if(this.ensureArrayIsOfType(array, "number")){
                    let max = Number.MAX_SAFE_INTEGER
                    array.forEach(function(num){
                        if(num < max){max = num}
                    })
                    resolve(max)
                }else{
                    throw new Error("Array contains something that is not a number.")
                }
            })
        },
        async findIDofArrayItem(array = Array(), equals){ //
            return new Promise(resolve => {
                let trueIndex
                array.find(function(currentValue, index){
                    if(currentValue == equals){
                        trueIndex = index
                        return true
                    }else{return false}
                })
                resolve(trueIndex)
            })
        },
        async sortLowToHigh(array = Array()){
            return new Promise(resolve => {
                if(this.ensureArrayIsOfType(array, "number")){
                    var searchArray = array
                    var fixedArray = []
                    while(true){
                        let min = this.findMinOfArray(searchArray)
                        let ID = this.findIDofArrayItem(searchArray, min)
                        fixedArray.push(min)
                        let fixedSearch = []
                        let processingPart = 0
                        while(processingPart < searchArray.length){
                            if(!(ID == processingPart)){
                                fixedSearch.push(searchArray[processingPart])
                            }
                            processingPart++
                        }
                        searchArray = fixedSearch
                        if(searchArray.length == 0){
                            break
                        }
                    }
                    resolve(fixedArray)
                }else{throw new Error("Array includes something that is not a number.")}
            })
        },
        async sortHighToLow(array = Array()){
            return new Promise(resolve => {
                if(this.ensureArrayIsOfType(array, "number")){
                    var searchArray = array
                    var fixedArray = []
                    while(true){
                        let min = this.findMaxOfArray(searchArray)
                        let ID = this.findIDofArrayItem(searchArray, min)
                        fixedArray.push(min)
                        let fixedSearch = []
                        let processingPart = 0
                        while(processingPart < searchArray.length){
                            if(!(ID == processingPart)){
                                fixedSearch.push(searchArray[processingPart])
                            }
                            processingPart++
                        }
                        searchArray = fixedSearch
                        if(searchArray.length == 0){
                            break
                        }
                    }
                    resolve(fixedArray)
                }else{throw new Error("Array includes something that is not a number.")}
            })
        },
        async replaceAllElements(string = String(), find = String(), replace = String()){
            return new Promise(resolve => {
                if(replace.includes(string)){
                    throw new Error("The text that replaces the text to find includes the text to find which would cause an infinite loop.")
                }
                var replacedString = string
                while(replacedString.includes(find)){
                    replacedString.replace(find, replace)
                }
                resolve(replacedString)
            })
        },
        async massFileCreate(path = String(), files = Array(), optionalData = String(), optionalFileExtension = String(), optionalEnableLogging = Boolean()){
            if(this.ensureParameters([path, files])){
                if(this.ensureArrayIsOfType(files, "string")){
                    var processingPart = 0
                    var dataToWrite
                    if((optionalData == "") || (optionalData == undefined)){dataToWrite = ""}else{dataToWrite = optionalData}
                    if(optionalFileExtension == ""){ // Split into two parts for better preformance
                        while(processingPart < files.length){
                            var fileWrite = path+files[processingPart]
                            fs.writeFile(fileWrite, dataToWrite, (err) => {
                                if(err){
                                    this.easyWrite("ObamaUtil ERR!", err, false, "brightRed")
                                }else if(optionalEnableLogging == true){
                                    this.easyWrite("ObamaUtil INFO", ("Finished writing a file"), false, "brightCyan")
                                }
                            })
                            processingPart++
                        }
                    }else{
                        while(processingPart < files.length){
                            var fileWrite = path+files[processingPart]+optionalFileExtension
                            fs.writeFile(fileWrite, dataToWrite, (err) => {
                                if(err){
                                    this.easyWrite("ObamaUtil ERR!", err, false, "brightRed")
                                }else if(optionalEnableLogging == true){
                                    this.easyWrite("ObamaUtil INFO", ("Finished writing a file"), false, "brightCyan")
                                }
                            })
                            processingPart++
                        }
                    }
                }else{
                    throw new Error("Array must contain only strings.")
                }
            }else{
                throw new Error("Both path and files must be defined.")
            }
        }
    },
    ensureParameters(parameters = Array()){
        var foundUndefined = false
        parameters.forEach(function(item){if(item == undefined){foundUndefined = true}})
        return !foundUndefined
    },
    getDateTime(now = Date()){ // https://stackoverflow.com/questions/7357734/how-do-i-get-the-time-of-day-in-javascript-node-js
        // Function modified by GitHub/BarakoLlama
        var date = now
        var hour = date.getHours()
        hour = (hour < 10 ? "0" : "") + hour
        var min  = date.getMinutes()
        min = (min < 10 ? "0" : "") + min
        var sec  = date.getSeconds()
        sec = (sec < 10 ? "0" : "") + sec
        var month = date.getMonth() + 1
        month = (month < 10 ? "0" : "") + month
        var day  = date.getDate()
        day = (day < 10 ? "0" : "") + day
        return (month + "/" + day + " " + hour + ":" + min + ":" + sec)
    },
    easyWrite(type = String(), message = String(), showTime = Boolean(), typeColor = String(), messageColor = String()){
        function ensureColor(color = String()){
            var listOfColors = Array("black", "red", "green", "yellow", "blue", "magenta", "cyan", "white", "gray", "grey",
            "brightRed", "brightGreen", "brightYellow", "brightBlue", "brightMagenta", "brightCyan", "brightWhite",
            "rainbow", "zebra", "america", "trap", "random")
            if(listOfColors.includes(color)){return true}else{return false}
        }
        if(this.ensureParameters([type, message])){
            // Ensure both type and message are not empty
            if(type == ""){throw new Error("type cannot be empty.")}
            if(message == ""){throw new Error("message cannot be empty.")}
            // Do it
            var trueTColor = "white"
            var trueMColor = "white"
            var trueTime = ""
            if(!(showTime == undefined)){if(showTime == true){trueTime = this.getDateTime(new Date(Date.now()))+" "}}
            if(!(typeColor == undefined) && !(typeColor == "")){
                if(ensureColor(typeColor)){
                    trueTColor = typeColor
                }else{
                    throw new Error(typeColor+" is not a color.")
                }
            }
            if(!(messageColor == undefined) && !(messageColor == "")){if(ensureColor(messageColor)){trueMColor = messageColor}else{throw new Error(messageColor+" is not a color.")}}
            colors.setTheme({
                ctype: trueTColor,
                cmsg: trueMColor
            })
            console.log(trueTime+colors.ctype(type)+" "+colors.cmsg(message))
        }else{
            throw new Error("type AND message needs to be defined.")
        }
    },
    highestNumberOfArray(array = Array()){
        let highestNumber = Number.MIN_SAFE_INTEGER
        array.forEach(function(number){
            if(number > highestNumber){highestNumber = number}
        })
        return highestNumber
    },
    getIDFromHighestNumberOfArray(array = Array(Number())){
        let highestNumber = Number.MIN_SAFE_INTEGER
        array.forEach(function(number){
            if(number > highestNumber){highestNumber = number}
        })
        let trueIndex
        array.find(function(currentValue, index){
            if(currentValue == highestNumber){
                trueIndex = index
                return true
            }else{return false}
        })
        return trueIndex
    },
    numberOfArrayClosestToZero(array = Array(Number())){
        function getError(out){
            if(out > 0){return (out - 0)}
            if(0 > out){return (0 - out)}
            return 0
        }
        let closestNumber = Number.MIN_SAFE_INTEGER
        array.forEach(function(number){
            if(getError(number) < getError(closestNumber)){closestNumber = number}
        })
        return closestNumber
    },
    IDOfNumberOfArrayClosestToZero(array = Array(Number())){
        function getError(out){
            if(out > 0){return (out - 0)}
            if(0 > out){return (0 - out)}
            return 0
        }
        let closestNumber = Number.MIN_SAFE_INTEGER
        array.forEach(function(number){
            if(getError(number) < getError(closestNumber)){closestNumber = number}
        })
        let trueIndex
        array.find(function(currentValue, index){
            if(currentValue == closestNumber){
                trueIndex = index
                return true
            }else{return false}
        })
        return trueIndex
    },
    getAverageOfArray(array = Array(Number())){
        let sum = 0
        let divisor = array.length
        array.forEach(function(number){
            sum = sum + number
        })
        return (sum / divisor)
    },
    findMaxOfArray(array = Array()){
        if(this.ensureArrayIsOfType(array, "number")){
            let max = Number.MIN_SAFE_INTEGER
            array.forEach(function(num){
                if(num > max){max = num}
            })
            return max
        }else{
            throw new Error("Array contains something that is not a number.")
        }
    },
    findMinOfArray(array = Array()){
        if(this.ensureArrayIsOfType(array, "number")){
            let max = Number.MAX_SAFE_INTEGER
            array.forEach(function(num){
                if(num < max){max = num}
            })
            return max
        }else{
            throw new Error("Array contains something that is not a number.")
        }
    },
    obamaUtilError(err = String()){
        throw new Error("ObamaUtil Internal Error: "+err)
    },
    ensureArrayIsOfType(array = Array(), type = String()){
        array.forEach(function(item){if(!(typeof item == type)){return false}})
        return true
    },
    findIDofArrayItem(array = Array(), equals){
        let trueIndex
        array.find(function(currentValue, index){
            if(currentValue == equals){
                trueIndex = index
                return true
            }else{return false}
        })
        return trueIndex
    },
    sortLowToHigh(array = Array()){
        if(this.ensureArrayIsOfType(array, "number")){
            var searchArray = array
            var fixedArray = []
            while(true){
                let min = this.findMinOfArray(searchArray)
                let ID = this.findIDofArrayItem(searchArray, min)
                fixedArray.push(min)
                let fixedSearch = []
                let processingPart = 0
                while(processingPart < searchArray.length){
                    if(!(ID == processingPart)){
                        fixedSearch.push(searchArray[processingPart])
                    }
                    processingPart++
                }
                searchArray = fixedSearch
                if(searchArray.length == 0){
                    break
                }
            }
            return fixedArray
        }else{throw new Error("Array includes something that is not a number.")}
    },
    sortHighToLow(array = Array()){
        if(this.ensureArrayIsOfType(array, "number")){
            var searchArray = array
            var fixedArray = []
            while(true){
                let min = this.findMaxOfArray(searchArray)
                let ID = this.findIDofArrayItem(searchArray, min)
                fixedArray.push(min)
                let fixedSearch = []
                let processingPart = 0
                while(processingPart < searchArray.length){
                    if(!(ID == processingPart)){
                        fixedSearch.push(searchArray[processingPart])
                    }
                    processingPart++
                }
                searchArray = fixedSearch
                if(searchArray.length == 0){
                    break
                }
            }
            return fixedArray
        }else{throw new Error("Array includes something that is not a number.")}
    },
    replaceAllElements(string = String(), find = String(), replace = String()){
        if(replace.includes(string)){
            throw new Error("The text that replaces the text to find includes the text to find which would cause an infinite loop.")
        }
        var replacedString = string
        while(replacedString.includes(find)){
            replacedString.replace(find, replace)
        }
        return replacedString
    },
    massFileCreate(path = String(), files = Array(), optionalData = String(), optionalFileExtension = String(), optionalEnableLogging = Boolean()){
        if(this.ensureParameters([path, files])){
            if(this.ensureArrayIsOfType(files, "string")){
                var processingPart = 0
                var dataToWrite
                if((optionalData == "") || (optionalData == undefined)){dataToWrite = ""}else{dataToWrite = optionalData}
                if(optionalFileExtension == ""){ // Split into two parts for better preformance
                    while(processingPart < files.length){
                        var fileWrite = path+files[processingPart]
                        fs.writeFile(fileWrite, dataToWrite, (err) => {
                            if(err){
                                this.easyWrite("ObamaUtil ERR!", err, false, "brightRed")
                            }else if(optionalEnableLogging == true){
                                this.easyWrite("ObamaUtil INFO", ("Finished writing a file"), false, "brightCyan")
                            }
                        })
                        processingPart++
                    }
                }else{
                    while(processingPart < files.length){
                        var fileWrite = path+files[processingPart]+optionalFileExtension
                        fs.writeFile(fileWrite, dataToWrite, (err) => {
                            if(err){
                                this.easyWrite("ObamaUtil ERR!", err, false, "brightRed")
                            }else if(optionalEnableLogging == true){
                                this.easyWrite("ObamaUtil INFO", ("Finished writing a file"), false, "brightCyan")
                            }
                        })
                        processingPart++
                    }
                }
            }else{
                throw new Error("Array must contain only strings.")
            }
        }else{
            throw new Error("Both path and files must be defined.")
        }
    },
    measureFunction(func){
        var current = new Date().getTime()
        func()
        var done = new Date().getTime()
        return (done - current)
    },
    keypressLoop(loopConditionCode, loopCode, keypressCode, finishedCode){
        loopCode()
        process.stdin.setRawMode(true)
        process.stdin.resume()
        process.stdin.once("data", (data) => {
            keypressCode(data.buffer)
            if(loopConditionCode()){this.keypressLoop(loopConditionCode, loopCode, keypressCode)}else{
                finishedCode()
            }
        })
    },
    arraysIncludeCommonElement(array1 = Array(), array2 = Array()){
        var processingPart = 0
        while(processingPart < array1.length){
            var partOne = array1[processingPart]
            var prc2 = 0
            while(prc2 < array2.length){
                if(array2[prc2] == partOne){return true}
                prc2++
            }
            processingPart++
        }
        return false
    },
    system: {
        resolveKeypress(bufferArray){
            if((bufferArray[0] > 0) && (bufferArray[0] <= 26)){
                let fix = ("ctrl+"+this.alphabet[bufferArray[0] - 1])
                if(fix == "ctrl+h"){return "backspace"}
                if(fix == "ctrl+m"){return "enter"}
                return fix
            }else if((bufferArray[0] >= 65) && (bufferArray[0] <= 90)){
                return ("shift+"+this.alphabet[bufferArray[0] - 65])
            }else if((bufferArray[0] >= 97) && (bufferArray[0] <= 122)){
                return(this.alphabet[bufferArray[0] - 97])
            }else if((bufferArray[0] >= 48) && (bufferArray[0] <= 57)){
                return(this.numbers[bufferArray[0] - 48])
            }else if(bufferArray[0] == 27){
                if(bufferArray[1] == undefined){return "escape"}
            }else{
                console.log(bufferArray.toString())
                return(this.specialCharResolve[bufferArray.toString()])
            }
        },
        alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
        "v", "w", "x", "y", "z"],
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        specialCharResolve: { // fix function keys + home keys
            "32":"space","27,91,91,65":"f1", "27,91,91,66":"f2",
            "27,91,91,67":"f3","27,91,91,68":"f4",
            "27,91,91,69":"f5","27,91,49,55,126":"f6","27,91,49,56,126":"f7",
            "27,91,49,57,126":"f8","27,91,50,48,126":"f9","27,91,50,49,126":"f10",
            "27,91,50,51,126":"f11","27,91,50,52,126":"f12","33":"!","64":"@",
            "35":"#","36":"$","37":"%","94":"^","38":"&","42":"*","40":"(",
            "41":")","45":"-","95":"_","61":"=","43":"+","91":"[","123":"{",
            "93":"]","125":"}","92":"backslash","124":"|","59":";","58":":",
            "39":"'","34":'"',"44":",","60":"<","46":".","62":">","47":"/",
            "63":"?","27,91,65":"up","27,91,67":"right","27,91,66":"down",
            "27,91,68":"left","27,91,50,126":"insert","27,91,49,126":"home",
            "27,91,53,126":"pgup","27,91,54,126":"pgdown",
            "27,91,51,126":"delete","27,91,52,126":"end","27,91,52,126":"numpad1",
            "27,91,66":"numpad2","27,91,54,126":"numpad3","27,91,68":"numpad4",
            "27,91,71":"numpad5","27,91,67":"numpad6","27,91,49,126":"numpad7",
            "27,91,65":"numpad8","27,91,53,126":"numpad9",
            "27,91,50,126":"numpad0","27,91,51,126":"numpadperiod","96":"`",
            "126":"~"
        }
    }
}
exports.BetterArray = {
    oneDimensional: class oneDimensional {
        constructor(array = Array()){
            this.array = array
            this.instance = new BetterArray()
        }
        stringify(){
            let output = ""
            this.array.forEach(function(item){
                output = output + item + ", "
            })
            return output
        }
        clear(){
            this.array = Array()
        }
        addItem(name){
            this.array.push(name)
        }
        removeItem(name){
            let newArray = Array()
            this.array.forEach(function(item){
                if(!(item == name)){
                    newArray.push(item)
                }
            })
            return newArray
        }
        findMax(){
            if(this.instance.ensureArrayIsOfType(this.array, "number")){
                let max = Number.MIN_SAFE_INTEGER
                this.array.forEach(function(num){
                    if(num > max){max = num}
                })
                return max
            }else{
                throw new Error("Array contains something that is not a number.")
            }
        }
        findMin(){
            if(this.instance.ensureArrayIsOfType(this.array, "number")){
                let max = Number.MAX_SAFE_INTEGER
                this.array.forEach(function(num){
                    if(num < max){max = num}
                })
                return max
            }else{
                throw new Error("Array contains something that is not a number.")
            }
        }
        toLoggerArray(){return new this.instance.loggerArray(this.array)}
        save(path = String(), callback){
            fs.writeFile(path, this.stringify(), (err) => {
                let error
                if(err){
                    error = err
                }else{
                    error = undefined
                }
                callback(error)
            })
        }
        includes(item){return this.array.includes(item)}
        length(){return this.array.length}
        copy(){return new this.instance.oneDimensional(this.array)}
    },
    twoDimensional: class twoDimensional {
        constructor(array1 = Array(), array2 = Array()) {
            this.array1 = array1
            this.array2 = array2
            this.instance = new BetterArray()
        }
        stringify(){
            let output = "{\n"
            let processingPart = 0
            while(processingPart < this.array1.length){
                if(processingPart == (this.array1.length - 1)){
                    output = output + '"' + this.array1[processingPart] + '":"' + this.array2[processingPart] + '"\n'
                }else{
                    output = output + '"' + this.array1[processingPart] + '":"' + this.array2[processingPart] + '",\n'
                }
                processingPart++
            }
            return (output + "}")
        }
        toJSON(){
            let stringified = this.stringify()
            let output = JSON.parse(stringified)
            return output
        }
        toTypeJSON(){
            return new this.instance.typeJson(this.toJSON())
        }
        clear(){
            this.array1 = Array()
            this.array2 = Array()
        }
        addItem(name, data){
            this.array1.push(name)
            this.array2.push(data)
        }
        removeItemByName(name){
            let processingPart = 0
            let foundID = Number()
            while(processingPart < this.array1.length){
                if(this.array1[processingPart] == name){
                    foundID = processingPart
                }
                processingPart++
            }
            return this.removeItemByID(foundID)
        }
        removeItemByData(data){
            let processingPart = 0
            let foundID = Number()
            while(processingPart < this.array2.length){
                if(this.array2[processingPart] == data){
                    foundID = processingPart
                }
                processingPart++
            }
            return this.removeItemByID(foundID)
        }
        removeItemByID(id = Number()){
            let newNames = Array()
            let newDatas = Array()
            let processingPart = 0
            while(processingPart < this.array1.length){
                if(!(processingPart == id)){
                    newNames.push(this.array1[processingPart])
                    newDatas.push(this.array2[processingPart])
                }
                processingPart++
            }
        }
        getItemByName(name){
            let processingPart = 0
            let foundID = Number()
            while(processingPart < this.array1.length){
                if(this.array1[processingPart == name]){
                    foundID = processingPart
                }
                processingPart++
            }
            return this.array2[foundID]
        }
        getItemByData(data){
            let processingPart = 0
            let foundID = Number()
            while(processingPart < this.array2.length){
                if(this.array2[processingPart == data]){
                    foundID = processingPart
                }
                processingPart++
            }
            return this.array1[foundID]
        }
        getItemByID(id = Number()){
            return [this.array1[id], this.array2[id]]
        }
        save(path = String(), callback){
            fs.writeFile(path, this.stringify(), (err) => {
                let error
                if(err){
                    error = err
                }else{
                    error = undefined
                }
                callback(error)
            })
        }
        includesName(item){return this.array1.includes(item)}
        includesData(item){return this.array2.includes(item)}
        length(){return this.array1.length}
        copy(){return new this.instance.twoDimensional(array1, array2)}
    },
    typeJson: class typeJson {
        constructor(jsonInput = JSON()){
            this.jsonInput = jsonInput
            this.instance = new BetterArray()        
        }
        stringify(){
            return JSON.stringify(this.jsonInput)
        }
        toTwoDimensional(){
            let stringified = this.stringify()
            let illegalCharacters = Array('"', "{", "}", " ")
            let fixed = String()
            let processingPart = 0
            while(processingPart < stringified.length){
                if(!(illegalCharacters.includes(stringified.substr(processingPart, 1)))){
                    fixed = fixed + stringified.substr(processingPart, 1)
                }
                processingPart++
            }
            stringified = fixed
            fixed = stringified.split(",")
            let newArray1 = Array()
            let newArray2 = Array()
            fixed.forEach(function(item){
                let part = item.split(":")
                newArray1.push(part[0])
                newArray2.push(part[1])
            })
            return new this.instance.twoDimensional(newArray1, newArray2)
        }
        toOneDimensional(){
            return new this.instance.oneDimensional(this.toTwoDimensional().array2)
        }
        clear(){
            this.jsonInput = JSON.parse("{}")
        }
        addItem(name, data){
            let twoDimensional = this.toTwoDimensional()
            twoDimensional.addItem(name, data)
            this.jsonInput = JSON.parse(twoDimensional.stringify())
        }
        removeItemByName(name){
            let twoDimensional = this.toTwoDimensional()
            twoDimensional.removeItemByName(name)
            this.jsonInput = JSON.parse(twoDimensional.stringify())
        }
        removeItemByData(data){
            let twoDimensional = this.toTwoDimensional()
            twoDimensional.removeItemByData(data)
            this.jsonInput = JSON.parse(twoDimensional.stringify())
        }
        getItemByName(name){
            let twoDimensional = this.toTwoDimensional()
            return twoDimensional.getItemByName(name)
        }
        getItemByData(data){
            let twoDimensional = this.toTwoDimensional()
            return twoDimensional.getItemByData(data)
        }
        save(path = String(), callback){
            fs.writeFile(path, this.stringify(), (err) => {
                let error
                if(err){
                    error = err
                }else{
                    error = undefined
                }
                callback(error)
            })
        }
        includesName(item){return this.toTwoDimensional().includesName(item)}
        includesData(item){return this.toTwoDimensional().includesData(item)}
        length(){return this.toTwoDimensional().length()}
        copy(){return new this.instance.typeJson(this.jsonInput)}
    },
    loggerArray: class LoggerArray {
        constructor(array = Array()){
            this.array = array
            this.instance = new BetterArray()
        }
        toOneDimensional(){return new this.instance.oneDimensional(this.array)}
        stringify(){
            let output = ""
            this.array.forEach(function(item){
                output = output + item + "\n"
            })
            return output
        }
        clear(){this.array = Array()}
        addItem(item = String()){this.array.push(item)}
        removeItem(item = String()){
            let oneDimensional = this.toOneDimensional()
            oneDimensional.removeItem(item)
            return oneDimensional.toLoggerArray()
        }
        logAndWrite(item = String()){
            console.log(item)
            this.addItem(item)
        }
        save(path = String(), callback){
            fs.writeFile(path, this.stringify(), (err) => {
                let error = undefined
                if(err){error = err}
                callback(error)
            })
        }
        includes(item = String()){return this.array.includes(item)}
        length(){return this.array.length}
        copy(){return new this.instance.loggerArray(this.array)}
    },
    readOneDimensional: (path = String()) => {
        let rawData = fs.readFileSync(path).toString()
        let modData = ""
        let processingPart = 0
        while(processingPart < rawData.length){
            if(rawData.substr(processingPart, 1) == " "){}else{
                modData = modData + rawData.substr(processingPart, 1)
            }
            processingPart++
        }
        let givenArray = modData.split(",")
        return new this.oneDimensional(givenArray)
    },
    readTwoDimensional: (path = String()) => {
        let rawData = fs.readFileSync(path).toString()
        let JSONData = JSON.parse(rawData)
        let typeJson = new this.typeJson(JSONData)
        return typeJson.toTwoDimensional()
    },
    readJson: (path = String()) => {
        let rawData = fs.readFileSync(path).toString()
        let JSONData = JSON.parse(rawData)
        return new this.typeJson(JSONData)
    },
    readLoggerArray: (path = String()) => {
        return new this.loggerArray(fs.readFileSync(path).toString().split("\n"))
    },
    ensureArrayIsOfType(array = Array(), type = String()){
        array.forEach(function(item){if(!(typeof item == type)){return false}})
        return true
    },
    highestNumberOfArray(array = Array(Number())){
        let highestNumber = Number.MIN_SAFE_INTEGER
        array.forEach(function(number){
            if(number > highestNumber){highestNumber = number}
        })
        return highestNumber
    },
    getIDFromHighestNumberOfArray(array = Array(Number())){
        let highestNumber = Number.MIN_SAFE_INTEGER
        array.forEach(function(number){
            if(number > highestNumber){highestNumber = number}
        })
        let trueIndex
        array.find(function(currentValue, index){
            if(currentValue == highestNumber){
                trueIndex = index
                return true
            }else{return false}
        })
        return trueIndex
    },
    numberOfArrayClosestToZero(array = Array(Number())){
        function getError(out){
            if(out > 0){return (out - 0)}
            if(0 > out){return (0 - out)}
            return 0
        }
        let closestNumber = Number.MIN_SAFE_INTEGER
        array.forEach(function(number){
            if(getError(number) < getError(closestNumber)){closestNumber = number}
        })
        return closestNumber
    },
    IDOfNumberOfArrayClosestToZero(array = Array(Number())){
        function getError(out){
            if(out > 0){return (out - 0)}
            if(0 > out){return (0 - out)}
            return 0
        }
        let closestNumber = Number.MIN_SAFE_INTEGER
        array.forEach(function(number){
            if(getError(number) < getError(closestNumber)){closestNumber = number}
        })
        let trueIndex
        array.find(function(currentValue, index){
            if(currentValue == closestNumber){
                trueIndex = index
                return true
            }else{return false}
        })
        return trueIndex
    },
    getAverageOfArray(array = Array(Number())){
        let sum = 0
        let divisor = array.length
        array.forEach(function(number){
            sum = sum + number
        })
        return (sum / divisor)
    }
}
exports.Internet = {
    response: class Response {
        constructor(body = String(), contentType = String(), responseCode = Number()){
            this.body = body
            this.contentType = contentType
            this.responseCode = responseCode
        }
    },
    system: {
        ResponseError: class ResponseError {
            // types: server, client
            constructor(type = String(), code = String(), message = String()){
                if(["server", "client"].includes(type.toLowerCase())){
                    this.type = type
                }else{throw new Error("ObamaUtil.Internet ERR! Improper error type")}
                this.message = message
                this.code = code
            }
        },
        listOfPorts: function listOfPorts(){
            var maxPort = 65535
            var ports = [80, 8080, 20, 21, 22, 23, 25, 53, 67, 68, 110, 119, 443, 123, 143, 161, 194, 443]
            var common = ports
            var processingPart = 1
            while(processingPart <= maxPort){
                if(!(common.includes(processingPart))){
                    ports.push(processingPart)
                }
                processingPart++
            }
            return ports
        },
        instance: this
    },
    get: function get(URL = String(), func = (response, error)){
        var betURL
        if(URL.startsWith("https")){betURL = URL.replace("https", "http")}else{betURL = URL}
        if(betURL.startsWith("http")){
            http.get(betURL, (res) => {
                res.setEncoding("utf8")
                var data = ""
                res.on("data", (chunk) => {
                    data = chunk
                    fulfilledData = true
                })
                res.on("end", () => {
                    if(res.complete){
                        var status = res.statusCode
                        var contentType = res.headers["content-type"]
                        func(new this.response(data, contentType, status), undefined)
                    }else{
                        func(undefined, new this.system.ResponseError("client", "CONNECTION_TERMINATED", "The connection was terminated by the server."))
                    }
                })
            })
        }else{
            func(undefined, new this.system.ResponseError("client", "PROTOCOL_NOT_SUPPORTED", "Only HTTP or HTTPS is supported."))
        }
    },
    isPortAvailable: async function isPortAvailable(host = String(), port = Number(), callback){
        var finished = http.get({
            host: host,
            port: port
        })
        finished.on("error", (err) => {if(err.errno == "ECONNREFUSED"){callback(true)}})
        finished.on("response", (response) => {callback(false)})
    },
    isPortAvailableSync: function isPortAvailable(host = String(), port = Number(), callback){
        var finished = http.get({
            host: host,
            port: port
        })
        finished.on("error", (err) => {if(err.errno == "ECONNREFUSED"){callback(true)}})
        finished.on("response", (response) => {callback(false)})
    },
    ping: async function ping(host = String(), port = Number(), callback){
        var current = new Date().getTime()
        var finished = http.get({
            host: host,
            port: port
        })
        finished.on("error", (err) => {callback(undefined)})
        finished.on("response", (response) => {
            var done = new Date().getTime()
            callback(done - current)
        })
    }
}
exports.Math = {
    GiantInt: class GiantInt {
        constructor(initialNumber = Number()){
            this.multiplier = 0
            this.power = 0
            this.instance = exports.Math
            if(initialNumber !== undefined){
                this.multiplier = this.instance.system.ClassifyMultiple(initialNumber)
                this.power = this.instance.system.ClassifyPower(initialNumber)
                // Fix <1
                if(this.power == undefined){
                    var negPower = 0
                    while((Math.pow(10, (-1*negPower)) > initialNumber)){

                        negPower++
                    }
                    this.power = -1*negPower
                    this.multiplier = this.instance.system.ConvertFromPower(initialNumber, 1, this.power)
                }
            }
            this.MAX_INTEGER = "1e94864"
            this.MIN_WHOLE_NUMBER = "1e-94864"
        }
        toNumber(){
            return (this.multiplier * Math.pow(10, this.power))/10
        }
        toStrinng(){
            return String(this.multiplier+"e"+this.power)
        }
    },
    GiantIntAdd: function Add(partOne, partTwo){
        var returner = new this.GiantInt()
        // Convert first power to second
        var newMultiplier = this.system.ConvertFromPower(partOne.multiplier, partOne.power, partTwo.power)
        // Fix multipliers into one
        newMultiplier = newMultiplier + partTwo.multiplier
        // Convert back to first power
        newMultiplier = this.system.ConvertFromPower(newMultiplier, partTwo.power, partOne.power)
        // Return
        returner.multiplier = newMultiplier
        returner.power = partOne.power
        return returner
    },
    GiantIntSubtract: function Subtract(partOne, partTwo){
        var returner = new this.GiantInt()
        // Convert first power to second
        var newMultiplier = this.system.ConvertFromPower(partOne.multiplier, partOne.power, partTwo.power)
        // Fix multipliers into one
        newMultiplier = newMultiplier - partTwo.multiplier
        // Convert back to first power
        newMultiplier = this.system.ConvertFromPower(newMultiplier, partTwo.power, partOne.power)
        // Return
        returner.multiplier = newMultiplier
        returner.power = partOne.power
        return returner
    },
    GiantIntMultiply: function Multiply(partOne, partTwo){
        var returner = new this.GiantInt()
        // Convert first power to second
        var newMultiplier = this.system.ConvertFromPower(partOne.multiplier, partOne.power, partTwo.power)
        // Fix multipliers into one
        newMultiplier = newMultiplier * partTwo.multiplier
        // Convert back to first power
        newMultiplier = this.system.ConvertFromPower(newMultiplier, partTwo.power, partOne.power)
        // Return
        returner.multiplier = newMultiplier
        returner.power = partOne.power
        return returner
    },
    GiantIntDivide: function Divide(partOne, partTwo){
        var newMul = partOne.multiplier / partTwo.multiplier
        var newPow = partOne.power / partTwo.power
        newMul = this.system.ConvertFromPower(newMul, newPow, partOne.power)
        var returner = new this.GiantInt()
        returner.multiplier = newMul
        returner.power = partOne.power
        return returner
    },
    GreatestCommonFactor: function gcf(numbers = Array()){
        function isCommonFactor(array = Array(), divisor = Number()){
            var isCommonFactor = true
            var processingPart = 0
            while(processingPart < array.length){
                if(array[processingPart]%divisor !== 0){isCommonFactor = false}
                processingPart++
            }
            return isCommonFactor
        }
        // Find lowest number
        var lowest = Number.MAX_VALUE
        var processingPart = 0
        while(processingPart < numbers.length){
            if(numbers[processingPart] < lowest){lowest = numbers[processingPart]}
            processingPart++
        }
        var scanner = lowest
        while(scanner > 1){
            if(isCommonFactor(numbers, scanner)){return scanner}
            scanner--
        }
        return undefined
    },
    AddArrays: function addArrays(n1 = Array(), n2 = Array()){
        var rn1
        var rn2
        if(n1.length = n2.length){
            rn1 = n1
            rn2 = n2
        }else if(n1.length > n2.length){
            rn1 = n1
            rn2 = n2
            while(rn1.length > rn2.length){
                rn2.push(0)
            }
        }else if(n1.length < n2.length){
            rn1 = n1
            rn2 = n2
            while(rn1.length < rn2.length){
                rn1.push(0)
            }
        }
        var returnArray = []
        rn1.forEach(function(item, index){
            returnArray.push(item + rn2[index])
        })
        return returnArray
    },
    SubtractArrays: function subtractArrays(n1 = Array(), n2 = Array()){
        var rn1
        var rn2
        if(n1.length = n2.length){
            rn1 = n1
            rn2 = n2
        }else if(n1.length > n2.length){
            rn1 = n1
            rn2 = n2
            while(rn1.length > rn2.length){
                rn2.push(0)
            }
        }else if(n1.length < n2.length){
            rn1 = n1
            rn2 = n2
            while(rn1.length < rn2.length){
                rn1.push(0)
            }
        }
        var returnArray = []
        rn1.forEach(function(item, index){
            returnArray.push(item - rn2[index])
        })
        return returnArray
    },
    MultiplyArrays: function multiplyArrays(n1 = Array(), n2 = Array()){
        var rn1
        var rn2
        if(n1.length = n2.length){
            rn1 = n1
            rn2 = n2
        }else if(n1.length > n2.length){
            rn1 = n1
            rn2 = n2
            while(rn1.length > rn2.length){
                rn2.push(0)
            }
        }else if(n1.length < n2.length){
            rn1 = n1
            rn2 = n2
            while(rn1.length < rn2.length){
                rn1.push(0)
            }
        }
        var returnArray = []
        rn1.forEach(function(item, index){
            returnArray.push(item * rn2[index])
        })
        return returnArray
    },
    DivideArrays: function divideArrays(n1 = Array(), n2 = Array()){
        var rn1
        var rn2
        if(n1.length = n2.length){
            rn1 = n1
            rn2 = n2
        }else if(n1.length > n2.length){
            rn1 = n1
            rn2 = n2
            while(rn1.length > rn2.length){
                rn2.push(0)
            }
        }else if(n1.length < n2.length){
            rn1 = n1
            rn2 = n2
            while(rn1.length < rn2.length){
                rn1.push(0)
            }
        }
        var returnArray = []
        rn1.forEach(function(item, index){
            returnArray.push(item / rn2[index])
        })
        return returnArray
    },
    system: {
        ClassifyPower(num = Number()){
            var numX
            if(num < 0){numX = num * -1}else{numX = num}
            var power = 309 // Pulled from Number.MAX_VALUE
            while(power >= 0){
                if((Math.pow(10, power) < numX)){
                    return power+1
                }
                power--
            }
            return undefined
        },
        ClassifyMultiple(num = Number()){
            var power = this.ClassifyPower(num)
            if(num < 0){
                return -1*(num / (Math.pow(10, power-1)))
            }else{
                return (num / (Math.pow(10, power-1)))
            }
        },
        ConvertFromPower(num = Number(), power = Number(), toPower = Number()){
            // returns new number
            if(toPower > power){
                return num / Math.pow(10, (toPower - power))
            }else if(toPower < power){
                return num * Math.pow(10, (power - toPower))
            }else{
                return num // No power change, therefore no number change
            }
        }
    }
}