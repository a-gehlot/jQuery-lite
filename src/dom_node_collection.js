class DOMNodeCollection {
    constructor(htmlElements) {
        this.htmlElements = htmlElements;
    }

    html (inner) {
        if (inner) {
            return inner.innerHTML;  
        } else {
            return this.htmlElements[0].innerHTML;
        }
    }
}

module.exports = DOMNodeCollection;