/**
 * [ViewElement description]
 * @type 
 */
class Audio extends HtmlElement
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
                    "AUDIO"
                )
            );
            this.initialize();
        }
    }
}