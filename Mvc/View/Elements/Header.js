/**
 * [ViewElement description]
 * @type 
 */
class Header extends HtmlElement
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
                    "HEADER"
                )
            );
            this.initialize();
        }
    }
}