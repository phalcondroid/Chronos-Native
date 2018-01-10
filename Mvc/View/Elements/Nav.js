


/**
 * [ViewElement description]
 * @type 
 */
class Nav extends HtmlElement
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
                    "NAV"
                )
            );
            this.initialize();
        }
    }
}
