

/**
 * [ViewElement description]
 * @type 
 */
class Bdo extends HtmlElement
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
                    "BDO"
                )
            );
            this.initialize();
        }
    }
}