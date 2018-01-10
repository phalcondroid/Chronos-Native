


/**
 * [ViewElement description]
 * @type 
 */
class Footer extends HtmlElement
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
                    "FOOTER"
                )
            );
            this.initialize();
        }
    }
}