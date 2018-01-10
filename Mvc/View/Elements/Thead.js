/**
 * [ViewElement description]
 * @type 
 */
class Thead extends HtmlElement
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
                    "THEAD"
                )
            );
            this.initialize();
        }
    }
}
