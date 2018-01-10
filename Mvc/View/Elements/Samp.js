
/**
 * [ViewElement description]
 * @type 
 */
class Samp extends HtmlElement
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
                    "SAMP"
                )
            );
            this.initialize();
        }
    }
}