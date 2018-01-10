


/**
 * [ViewElement description]
 * @type 
 */
class Blockquote extends HtmlElement
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
                    "BLOCKQUOTE"
                )
            );
            this.initialize();
        }
    }
}
