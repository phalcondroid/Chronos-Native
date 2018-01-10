


/**
 * [ViewElement description]
 * @type 
 */
class Del extends HtmlElement
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
                    "DEL"
                )
            );
            this.initialize();
        }
    }
}
