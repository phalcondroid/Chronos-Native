 


/**
 * [ViewElement description]
 * @type 
 */
class H1 extends HtmlElement
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
                    "H1"
                )
            );
            this.initialize();
        }
    }
}
