


/**
 * [ViewElement description]
 * @type 
 */
class H3 extends HtmlElement
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
                    "H3"
                )
            );
            this.initialize();
        }
    }
}