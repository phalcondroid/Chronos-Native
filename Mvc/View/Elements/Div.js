


/**
 * [ViewElement description]
 * @type 
 */
class Div extends HtmlElement
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
                    "DIV"
                )
            );
            this.initialize();
        }
    }
}
