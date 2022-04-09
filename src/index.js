const DOMNodeCollection = require('./dom_node_collection')

window.$l = function(argument) {
    if (typeof(argument) === 'string') {
        let nodes = document.querySelectorAll(argument);
        let nodeArray = Array.from(nodes)
        return nodeArray;
    }
}
