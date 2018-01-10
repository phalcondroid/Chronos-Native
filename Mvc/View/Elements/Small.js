/**
 * [ViewElement description]
 * @type 
 */
class Small extends HtmlElement
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
                    "SMALL"
                )
            );
            this.initialize();
        }
    }
}
