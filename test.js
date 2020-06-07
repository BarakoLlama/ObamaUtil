const ObamaUtil = require("./ObamaUtil")
var ezmap = new ObamaUtil.GameEngine.classes.GameMap(20, 10)
//var renderer = new ObamaUtil.GameEngine.classes.GameRenderer(ezmap, true)
//console.log(renderer.renderFrame())
//ezmap.showMap()
/*let obama = ObamaUtil.ObamaUtil
var counter = 0
obama.keypressLoop(() => {
    if(counter > 10){return false}else{return true}
}, () => {
    counter++
    console.log(counter)
}, (data) => {
    console.log(data)
})*/
/*ObamaUtil.GameEngine.MapEditor(ezmap, (cb) => {
    console.log(cb)
})*/
ObamaUtil.GameEngine.system.loop(() => {
    return true
}, () => {

}, (code) => {
    console.log(code)
    console.log("resolved to "+ObamaUtil.ObamaUtil.system.resolveKeypress(code.data))
    console.log(code.data.toString())
}, () => {
    end
})