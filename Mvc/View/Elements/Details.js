


/**
 * [ViewElement description]
 * @type 
 */
class Details extends HtmlElement
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
                    "DETAILS"
                )
            );
            this.initialize();
        }
    }
}