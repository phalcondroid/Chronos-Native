


/**
 * [ViewElement description]
 * @type 
 */
class Li extends HtmlElement
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
                    "LI"
                )
            );
            this.initialize();
        }
    }
}