/**
 * [ViewElement description]
 * @type 
 */
class I extends HtmlElement
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
                    "I"
                )
            );
            this.initialize();
        }
    }
}