/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DOMNodeCollection {\n    constructor(htmlElements) {\n        this.htmlElements = htmlElements;\n    }\n\n    html (text) {\n        if (text) {\n            this.htmlElements.forEach((element) => {\n                element.innerHTML = text\n            });  \n        } else {\n            return this.htmlElements[0].innerHTML;\n        }\n    }\n\n    empty () {\n       this.htmlElements.forEach((element) => {\n           element.innerHTML = \"\"\n       })\n    }\n\n    append (children) {\n        if (typeof (children) === 'object' && !(children instanceof(DOMNodeCollection))) {\n            children = $l('children')\n        }\n        if (typeof (children) === 'string') {\n            this.htmlElements.forEach((outerElement) => {\n                outerElement.innerHTML += children;\n            })\n        } else if (children instanceof(DOMNodeCollection)) {\n            this.htmlElements.forEach((outerElement) => {\n                children.htmlElements.forEach((child) => {\n                    outerElement.append(child.cloneNode(true))\n                })\n            })\n        }\n    }\n\n    attr (name, val) {\n        if (!val) {\n            return this.htmlElements[0].getAttribute(name);\n        } else {\n            this.htmlElements.forEach((element) => {\n                element.setAttribute(name, val);\n            })\n        }\n    }\n\n    addClass (name) {\n        this.htmlElements.forEach((element) => {\n            element.className = name;\n        })\n    }\n\n    removeClass (name) {\n        this.htmlElements.forEach((element) =>{\n            element.classList.remove(name);\n        })\n    }\n\n    children () {\n        let children = new DOMNodeCollection([]);\n        this.htmlElements.forEach((element) => {\n            children.htmlElements.push(element.children)\n        })\n        return children;\n    }\n\n    parent () {\n        let parents = [];\n        this.htmlElements.forEach((element) => {\n            if (!element.parentNode.visited) {\n                parents.push(element.parentNode);\n                element.parentNode.visited = true;\n            }\n        })\n        return new DOMNodeCollection(parents);\n    }\n\n    find(selector) {\n        let items = []\n        this.htmlElements.forEach((element) => {\n            items.push(element.querySelectorAll(selector))\n        });\n        return new DOMNodeCollection(items);\n    }\n\n    remove () {\n        this.htmlElements.forEach((element) => {\n            element.remove();\n        })\n    }\n\n    on (type, callback) {\n     this.htmlElements.forEach((element) => {\n        element.addEventListener(type, callback);\n        element[`${type}`] = callback;\n     })   \n    }\n\n    off (type) {\n        this.htmlElements.forEach((element) => {\n            element.removeEventListener(type, element[`${type}`])\n        })\n    }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\")\n\nconst _docReadyCallbacks = []\nvar _docReady = false;\n\nwindow.$l = function(argument) {\n    switch(typeof argument) {\n        case 'function':\n            return registerDocReadyCallback(argument);\n        case 'string':\n            let nodes = document.querySelectorAll(argument);\n            let nodeArray = Array.from(nodes);\n            return new DOMNodeCollection(nodeArray);\n        case 'HTMLElement':\n            return new DOMNodeCollection([argument]);\n    }\n\n}\n\n$l.extend = function() {\n    let merged = Object.assign({}, ...arguments);\n    return merged;\n}\n\n$l.ajax = (options) => {\n    const request = new XMLHttpRequest();\n    const defaults = {\n        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',\n        method: \"GET\",\n        url: \"\",\n        success: () => { },\n        error: () => { },\n        data: {},\n    };\n    options = $l.extend(defaults, options);\n\n    request.open(options.method, options.url);\n    console.log(request);\n    request.onload = () => {\n        if (request.status === 200) {\n            options.success(request.response);\n        } else {\n            options.error(request.response);\n        }\n    }\n    console.log(request);\n    request.send(JSON.stringify(options.data));\n\n}\n\n// $l.ajax = (options) => {\n//     const request = new XMLHttpRequest();\n//     const defaults = {\n//         contentType: 'application/x-www-form-urlencoded; charset=UTF-8',\n//         method: \"GET\",\n//         url: \"\",\n//         success: () => { },\n//         error: () => { },\n//         data: {},\n//     };\n//     options = $l.extend(defaults, options);\n    // options.method = options.method.toUpperCase();\n\n//     if (options.method === \"GET\") {\n//         // data is query string for get\n//         options.url += `?${toQueryString(options.data)}`;\n//     }\n\n//     request.open(options.method, options.url, true);\n//     request.onload = (e) => {\n//         // NB: Triggered when request.readyState === XMLHttpRequest.DONE ===  4\n//         if (request.status === 200) {\n//             options.success(request.response);\n//         } else {\n//             options.error(request.response);\n//         }\n//     };\n\n//     request.send(JSON.stringify(options.data));\n// };\n\ntoQueryString = (obj) => {\n    let result = \"\";\n    for (const prop in obj) {\n        if (Object.prototype.hasOwnProperty.call(obj, prop)) {\n            result += `${prop}=${obj[prop]}&`;\n        }\n    }\n    return result.substring(0, result.length - 1);\n};\n\nregisterDocReadyCallback = (func) => {\n    if (!_docReady) {\n        _docReadyCallbacks.push(func);\n    } else {\n        func();\n    }\n};\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    _docReady = true;\n    _docReadyCallbacks.forEach(func => func());\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;