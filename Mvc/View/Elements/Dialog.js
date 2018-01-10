


/**
 * [ViewElement description]
 * @type 
 */
class Dialog extends HtmlElement
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
                    "DIALOG"
                )
            );
            this.initialize();
        }
    }
}
