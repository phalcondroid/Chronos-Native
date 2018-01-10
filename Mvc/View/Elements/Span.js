/**
 * [ViewElement description]
 * @type 
 */
class Span extends HtmlElement
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
                    "SPAN"
                )
            );
            this.initialize();
        }
    }
}