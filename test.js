const ObamaUtil = require('./ObamaUtil')
const obama = new ObamaUtil.ObamaUtil()
obama.massFileCreate("./test/", ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"], "hi", ".txt", true)