/**
 * [ViewElement description]
 * @type 
 */
class Textarea extends HtmlElement
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
                    "TEXTAREA"
                )
            );
            this.initialize();
        }
    }
}