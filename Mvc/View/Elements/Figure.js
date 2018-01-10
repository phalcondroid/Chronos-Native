


/**
 * [ViewElement description]
 * @type 
 */
class Figure extends HtmlElement
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
                    "FIGURE"
                )
            );
            this.initialize();
        }
    }
}