


/**
 * [ViewElement description]
 * @type 
 */
class Link extends HtmlElement
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
                    "LINK"
                )
            );
            this.initialize();
        }
    }
}
