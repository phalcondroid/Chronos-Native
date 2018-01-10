


/**
 * [ViewElement description]
 * @type 
 */
class P extends HtmlElement
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
                    "P"
                )
            );
            this.initialize();
        }
    }
}