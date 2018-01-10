/**
 * [ViewElement description]
 * @type 
 */
class Pre extends HtmlElement
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
                    "PRE"
                )
            );
            this.initialize();
        }
    }
}