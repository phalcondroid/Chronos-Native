/**
 * [ViewElement description]
 * @type 
 */
class Tfoot extends HtmlElement
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
                    "TFOOT"
                )
            );
            this.initialize();
        }
    }
}