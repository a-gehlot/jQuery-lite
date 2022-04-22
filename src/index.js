const DOMNodeCollection = require('./dom_node_collection')

const _docReadyCallbacks = []
var _docReady = false;

window.$l = function(argument) {
    switch(typeof argument) {
        case 'function':
            return registerDocReadyCallback(argument);
        case 'string':
            let nodes = document.querySelectorAll(argument);
            let nodeArray = Array.from(nodes);
            return new DOMNodeCollection(nodeArray);
        case 'HTMLElement':
            return new DOMNodeCollection([argument]);
    }

}

registerDocReadyCallback = (func) => {
    if (!_docReady) {
        _docReadyCallbacks.push(func);
    } else {
        func();
    }
};


document.addEventListener('DOMContentLoaded', () => {
    _docReady = true;
    _docReadyCallbacks.forEach(func => func());
});