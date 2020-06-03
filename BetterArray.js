// GitHub/BarakoLlama \\

const fs = require("fs")

class BetterArray {
    constructor(){
        this.oneDimensional = class oneDimensional {
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
        }
        this.twoDimensional = class twoDimensional {
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
                return this.getItemByID(foundID)
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
                return this.getItemByID(foundID)

            }
            getItemByID(id = Number()){
                return this.array2[id]
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
        }
        this.typeJson = class typeJson {
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
        }
        this.loggerArray = class LoggerArray {
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
        }
        this.readOneDimensional = (path = String()) => {
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
        }
        this.readTwoDimensional = (path = String()) => {
            let rawData = fs.readFileSync(path).toString()
            let JSONData = JSON.parse(rawData)
            let typeJson = new this.typeJson(JSONData)
            return typeJson.toTwoDimensional()
        }
        this.readJson = (path = String()) => {
            let rawData = fs.readFileSync(path).toString()
            let JSONData = JSON.parse(rawData)
            return new this.typeJson(JSONData)
        }
        this.readLoggerArray = (path = String()) => {
            return new this.loggerArray(fs.readFileSync(path).toString().split("\n"))
        }
    }
    highestNumberOfArray(array = Array(Number())){
        let highestNumber = Number.MIN_SAFE_INTEGER
        array.forEach(function(number){
            if(number > highestNumber){highestNumber = number}
        })
        return highestNumber
    }
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
    }
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
    }
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
    }
    getAverageOfArray(array = Array(Number())){
        let sum = 0
        let divisor = array.length
        array.forEach(function(number){
            sum = sum + number
        })
        return (sum / divisor)
    }
}

module.exports = BetterArray