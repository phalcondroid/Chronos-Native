


/**
 * [ViewElement description]
 * @type 
 */
class Meter extends HtmlElement
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
                    "METER"
                )
            );
            this.initialize();
        }
    }
}
