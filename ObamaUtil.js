const colors = require('colors')

exports.ObamaUtil = class ObamaUtil {
    constructor(){
        
    }
    ensureParameters(parameters = Array()){
        var foundUndefined = false
        parameters.forEach(function(item){if(item == undefined){foundUndefined = true}})
        return !foundUndefined
    }
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
    }
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
