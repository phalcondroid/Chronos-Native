/**
 * [ViewElement description]
 * @type 
 */
class S extends HtmlElement
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
                    "S"
                )
            );
            this.initialize();
        }
    }
}
