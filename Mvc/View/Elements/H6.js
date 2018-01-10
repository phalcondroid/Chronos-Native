


/**
 * [ViewElement description]
 * @type 
 */
class H6 extends HtmlElement
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
                    "H6"
                )
            );
            this.initialize();
        }
    }
}
