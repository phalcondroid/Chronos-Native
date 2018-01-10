/**
 * [ViewElement description]
 * @type 
 */
class B extends HtmlElement
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
                    "B"
                )
            );
            this.initialize();
        }
    }
}