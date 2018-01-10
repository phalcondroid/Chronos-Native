


/**
 * [ViewElement description]
 * @type 
 */
class Kbd extends HtmlElement
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
                    "KBD"
                )
            );
            this.initialize();
        }
    }
}