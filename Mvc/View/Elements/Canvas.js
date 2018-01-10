/**
 * [ViewElement description]
 * @type 
 */
class Canvas extends HtmlElement
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
                    "CANVAS"
                )
            );
            this.initialize();
        }
    }
}
