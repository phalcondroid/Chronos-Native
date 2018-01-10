


/**
 * [ViewElement description]
 * @type 
 */
class Menuitem extends HtmlElement
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
                    "MENUITEM"
                )
            );
            this.initialize();
        }
    }
}