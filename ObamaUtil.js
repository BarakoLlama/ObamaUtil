// GitHub/BarakoLlama \\

const colors = require('colors')
const fs = require('fs')

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
    readOneDimensional = (path = String()) => {
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
    readTwoDimensional = (path = String()) => {
        let rawData = fs.readFileSync(path).toString()
        let JSONData = JSON.parse(rawData)
        let typeJson = new this.typeJson(JSONData)
        return typeJson.toTwoDimensional()
    },
    readJson = (path = String()) => {
        let rawData = fs.readFileSync(path).toString()
        let JSONData = JSON.parse(rawData)
        return new this.typeJson(JSONData)
    },
    readLoggerArray = (path = String()) => {
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