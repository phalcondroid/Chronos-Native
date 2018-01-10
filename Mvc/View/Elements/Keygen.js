


/**
 * [ViewElement description]
 * @type 
 */
class Keygen extends HtmlElement
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
                    "KEYGEN"
                )
            );
            this.initialize();
        }
    }
}