/**
 * [ViewElement description]
 * @type 
 */
class Head extends HtmlElement
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
                    "HEAD"
                )
            );
            this.initialize();
        }
    }
}