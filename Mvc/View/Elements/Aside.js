/**
 * [ViewElement description]
 * @type 
 */
class Aside extends HtmlElement
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
                    "ASIDE"
                )
            );
            this.initialize();
        }
    }
}