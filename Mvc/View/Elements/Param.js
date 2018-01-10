


/**
 * [ViewElement description]
 * @type 
 */
class Param extends HtmlElement
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
                    "PARAM"
                )
            );
            this.initialize();
        }
    }
}