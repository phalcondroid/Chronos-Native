


/**
 * [ViewElement description]
 * @type 
 */
class Menu extends HtmlElement
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
                    "MENU"
                )
            );
            this.initialize();
        }
    }
}