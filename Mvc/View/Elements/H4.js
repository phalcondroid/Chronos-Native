


/**
 * [ViewElement description]
 * @type 
 */
class H4 extends HtmlElement
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
                    "H4"
                )
            );
            this.initialize();
        }
    }
}