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

$l.extend = function() {
    let merged = Object.assign({}, ...arguments);
    return merged;
}

$l.ajax = (options) => {
    const request = new XMLHttpRequest();
    const defaults = {
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        method: "GET",
        url: "",
        success: () => { },
        error: () => { },
        data: {},
    };
    options = $l.extend(defaults, options);

    request.open(options.method, options.url);
    console.log(request);
    request.onload = () => {
        if (request.status === 200) {
            options.success(request.response);
        } else {
            options.error(request.response);
        }
    }
    console.log(request);
    request.send(JSON.stringify(options.data));

}


toQueryString = (obj) => {
    let result = "";
    for (const prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            result += `${prop}=${obj[prop]}&`;
        }
    }
    return result.substring(0, result.length - 1);
};

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