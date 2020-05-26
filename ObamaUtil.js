exports.ObamaUtil = class ObamaUtil {
    constructor(){
        
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
