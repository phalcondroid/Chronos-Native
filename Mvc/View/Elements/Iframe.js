


/**
 * [ViewElement description]
 * @type 
 */
class Iframe extends HtmlElement
{
    /**
     *
     */
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "IFRAME"
                )
            );
            this.initialize();
        }
    }
}
