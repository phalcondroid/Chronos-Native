/**
 * [ViewElement description]
 * @type 
 */
class Tbody extends HtmlElement
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
                    "TBODY"
                )
            );
            this.initialize();
        }
    }
}
