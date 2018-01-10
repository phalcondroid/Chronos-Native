/**
 * [ViewElement description]
 * @type 
 */
class Sup extends HtmlElement
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
                    "SUP"
                )
            );
            this.initialize();
        }
    }
}
