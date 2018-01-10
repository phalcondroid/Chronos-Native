/**
 * [ViewElement description]
 * @type 
 */
class Video extends HtmlElement
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
                    "VIDEO"
                )
            );
            this.initialize();
        }
    }
}