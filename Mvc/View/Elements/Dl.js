


/**
 * [ViewElement description]
 * @type 
 */
class Dl extends HtmlElement
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
                    "DL"
                )
            );
            this.initialize();
        }
    }
}
