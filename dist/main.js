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

eval("class DOMNodeCollection {\n    constructor(htmlElements) {\n        this.htmlElements = htmlElements;\n    }\n\n    html (text) {\n        if (text) {\n            this.htmlElements.forEach((element) => {\n                element.innerHTML = text\n            });  \n        } else {\n            return this.htmlElements[0].innerHTML;\n        }\n    }\n\n    empty () {\n       this.htmlElements.forEach((element) => {\n           element.innerHTML = \"\"\n       })\n    }\n\n    append (children) {\n        if (typeof (children) === 'object' && !(children instanceof(DOMNodeCollection))) {\n            children = $l('children')\n        }\n        if (typeof (children) === 'string') {\n            this.htmlElements.forEach((outerElement) => {\n                outerElement.innerHTML += children;\n            })\n        } else if (children instanceof(DOMNodeCollection)) {\n            this.htmlElements.forEach((outerElement) => {\n                children.htmlElements.forEach((child) => {\n                    outerElement.append(child.cloneNode(true))\n                })\n            })\n        }\n    }\n\n    attr (name, val) {\n        if (!val) {\n            return this.htmlElements[0].getAttribute(name);\n        } else {\n            this.htmlElements.forEach((element) => {\n                element.setAttribute(name, val);\n            })\n        }\n    }\n\n    addClass (name) {\n        this.htmlElements.forEach((element) => {\n            element.className = name;\n        })\n    }\n\n    removeClass (name) {\n        this.htmlElements.forEach((element) =>{\n            element.classList.remove(name);\n        })\n    }\n\n    children () {\n        let children = new DOMNodeCollection([]);\n        this.htmlElements.forEach((element) => {\n            children.htmlElements.push(element.children)\n        })\n        return children;\n    }\n\n    parent () {\n        let parents = [];\n        this.htmlElements.forEach((element) => {\n            if (!element.parentNode.visited) {\n                parents.push(element.parentNode);\n                element.parentNode.visited = true;\n            }\n        })\n        return new DOMNodeCollection(parents);\n    }\n\n    find(selector) {\n        let items = []\n        this.htmlElements.forEach((element) => {\n            items.push(element.querySelectorAll(selector))\n        });\n        return new DOMNodeCollection(items);\n    }\n\n    remove () {\n        this.htmlElements.forEach((element) => {\n            element.remove();\n        })\n    }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\")\n\nwindow.$l = function(argument) {\n    if (typeof(argument) === 'string') {\n        let nodes = document.querySelectorAll(argument);\n        let nodeArray = Array.from(nodes)\n        return new DOMNodeCollection(nodeArray)\n    } else if (typeof(argument) === 'HTMLElement') {\n        return new DOMNodeCollection([argument]);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

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