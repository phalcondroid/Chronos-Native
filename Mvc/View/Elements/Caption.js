


/**
 * [ViewElement description]
 * @type 
 */
class Caption extends HtmlElement
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
                    "CAPTION"
                )
            );
            this.initialize();
        }
    }
}