class HtmlHelper {
    name = 'HtmlHelper';

    createElement(type = 'span') {
        return document.createElement(type);
    }

    appendChild(child) {
        return document.body.appendChild(child)
    }

    addStyle(element, style) {
        console.dir(element)
        element.style = {...element.style, ...style}
    }

}


export const htmlHelper = new HtmlHelper();