 

/**
 * [ViewElement description]
 * @type 
 */
class Col extends HtmlElement
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
                    "COL"
                )
            );
            this.initialize();
        }
    }
}