


/**
 * [ViewElement description]
 * @type 
 */
class Ins extends HtmlElement
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
                    "INS"
                )
            );
            this.initialize();
        }
    }
}
