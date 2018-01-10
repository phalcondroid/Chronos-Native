/**
 * [ViewElement description]
 * @type 
 */
class Strong extends HtmlElement
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
                    "STRONG"
                )
            );
            this.initialize();
        }
    }
}