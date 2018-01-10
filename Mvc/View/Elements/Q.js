/**
 * [ViewElement description]
 * @type 
 */
class Q extends HtmlElement
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
                    "Q"
                )
            );
            this.initialize();
        }
    }
}