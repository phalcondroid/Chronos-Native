/**
 * [ViewElement description]
 * @type 
 */
class Bdi extends HtmlElement
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
                    "BDI"
                )
            );
            this.initialize();
        }
    }
}