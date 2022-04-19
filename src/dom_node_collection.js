class DOMNodeCollection {
    constructor(htmlElements) {
        this.htmlElements = htmlElements;
    }

    html (text) {
        if (text) {
            this.htmlElements.forEach((element) => {
                element.innerHTML = text
            });  
        } else {
            return this.htmlElements[0].innerHTML;
        }
    }

    empty () {
       this.htmlElements.forEach((element) => {
           element.innerHTML = ""
       })
    }

    append (children) {
        if (typeof (children) === 'object' && !(children instanceof(DOMNodeCollection))) {
            children = $l('children')
        }
        if (typeof (children) === 'string') {
            this.htmlElements.forEach((outerElement) => {
                outerElement.innerHTML += children;
            })
        } else if (children instanceof(DOMNodeCollection)) {
            this.htmlElements.forEach((outerElement) => {
                children.htmlElements.forEach((child) => {
                    outerElement.append(child.cloneNode(true))
                })
            })
        }
    }

    attr (name, val) {
        if (!val) {
            return this.htmlElements[0].getAttribute(name);
        } else {
            this.htmlElements.forEach((element) => {
                element.setAttribute(name, val);
            })
        }
    }

    addClass (name) {
        this.htmlElements.forEach((element) => {
            element.className = name;
        })
    }

    removeClass (name) {
        this.htmlElements.forEach((element) =>{
            element.classList.remove(name);
        })
    }

    children () {
        let children = new DOMNodeCollection([]);
        this.htmlElements.forEach((element) => {
            children.htmlElements.push(element.children)
        })
        return children;
    }

    parent () {
        let parents = [];
        this.htmlElements.forEach((element) => {
            if (!element.parentNode.visited) {
                parents.push(element.parentNode);
                element.parentNode.visited = true;
            }
        })
        return new DOMNodeCollection(parents);
    }

    find(selector) {
        let items = []
        this.htmlElements.forEach((element) => {
            items.push(element.querySelectorAll(selector))
        });
        return new DOMNodeCollection(items);
    }

    remove () {
        this.htmlElements.forEach((element) => {
            element.remove();
        })
    }

    on (type, callback) {
     this.htmlElements.forEach((element) => {
        element.addEventListener(type, callback);
        element[`${type}`] = callback;
     })   
    }

    off (type) {
        this.htmlElements.forEach((element) => {
            element.removeEventListener(type, element[`${type}`])
        })
    }
}

module.exports = DOMNodeCollection;