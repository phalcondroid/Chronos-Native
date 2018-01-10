/**
 * [ViewElement description]
 * @type 
 */
class Tr extends HtmlElement
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
                    "TR"
                )
            );
            this.initialize();
        }
    }
}
