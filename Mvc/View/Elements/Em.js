


/**
 * [ViewElement description]
 * @type 
 */
class Em extends HtmlElement
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
                    "EM"
                )
            );
            this.initialize();
        }
    }
}