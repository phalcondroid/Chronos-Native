


/**
 * [ViewElement description]
 * @type 
 */
class Figcaption extends HtmlElement
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
                    "FIGCAPTION"
                )
            );
            this.initialize();
        }
    }
}