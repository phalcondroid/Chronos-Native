


/**
 * [ViewElement description]
 * @type 
 */
class Label extends HtmlElement
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
                    "LABEL"
                )
            );
            this.initialize();
        }
    }
}