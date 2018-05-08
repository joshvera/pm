var fromJSON = require("ngraph.fromjson")
var createLayout = require("ngraph.offline.layout")
var save = require("ngraph.tobinary")

var args = process.argv.slice(2);
var json = require("./" + args[0])
var graph = fromJSON(json)
var layout = createLayout(graph)
layout.run()
save(graph)
