/**
 * [ViewElement description]
 * @type 
 */
class Rp extends HtmlElement
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
                    "RP"
                )
            );
            this.initialize();
        }
    }
}