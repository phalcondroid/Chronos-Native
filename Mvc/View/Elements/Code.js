


/**
 * [ViewElement description]
 * @type 
 */
class Code extends HtmlElement
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
                    "CODE"
                )
            );
            this.initialize();
        }
    }
}
