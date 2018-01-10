/**
 * [ViewElement description]
 * @type 
 */
class Ul extends HtmlElement
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
                    "UL"
                )
            );
            this.initialize();
        }
    }
}