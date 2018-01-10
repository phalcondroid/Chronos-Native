


/**
 * [ViewElement description]
 * @type 
 */
class Dfn extends HtmlElement
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
                    "DFN"
                )
            );
            this.initialize();
        }
    }
}