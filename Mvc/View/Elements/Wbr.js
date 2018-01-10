/**
 * [ViewElement description]
 * @type 
 */
class Wbr extends HtmlElement
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
                    "WBR"
                )
            );
            this.initialize();
        }
    }
}
