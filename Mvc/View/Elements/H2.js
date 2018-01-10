


/**
 * [ViewElement description]
 * @type 
 */
class H2 extends HtmlElement
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
                    "H2"
                )
            );
            this.initialize();
        }
    }
}