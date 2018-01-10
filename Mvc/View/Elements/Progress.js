/**
 * [ViewElement description]
 * @type 
 */
class Progress extends HtmlElement
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
                    "PROGRESS"
                )
            );
            this.initialize();
        }
    }
}
