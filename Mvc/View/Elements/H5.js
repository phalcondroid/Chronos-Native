


/**
 * [ViewElement description]
 * @type 
 */
class H5 extends HtmlElement
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
                    "H5"
                )
            );
            this.initialize();
        }
    }
}
