


/**
 * [ViewElement description]
 * @type 
 */
class Map extends HtmlElement
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
                    "MAP"
                )
            );
            this.initialize();
        }
    }
}