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
}

module.exports = DOMNodeCollection;