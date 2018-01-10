



/**
 * [ViewElement description]
 * @type 
 */
class Embed extends HtmlElement
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
                    "EMBED"
                )
            );
            this.initialize();
        }
    }
}