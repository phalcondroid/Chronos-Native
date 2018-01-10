


/**
 * [ViewElement description]
 * @type 
 */
class Cite extends HtmlElement
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
                    "CITE"
                )
            );
            this.initialize();
        }
    }
}