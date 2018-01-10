


/**
 * [ViewElement description]
 * @type 
 */
class Output extends HtmlElement
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
                    "OUTPUT"
                )
            );
            this.initialize();
        }
    }
}