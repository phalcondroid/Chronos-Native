/**
 * [ViewElement description]
 * @type 
 */
class Title extends HtmlElement
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
                    "TITLE"
                )
            );
            this.initialize();
        }
    }
}