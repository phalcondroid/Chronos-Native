


/**
 * [ViewElement description]
 * @type 
 */
class Dt extends HtmlElement
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
                    "DT"
                )
            );
            this.initialize();
        }
    }
}