


/**
 * [ViewElement description]
 * @type 
 */
class Leyend extends HtmlElement
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
                    "LEYEND"
                )
            );
            this.initialize();
        }
    }
}