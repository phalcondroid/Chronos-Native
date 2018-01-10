/**
 * [ViewElement description]
 * @type 
 */
class Style extends HtmlElement
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
                    "STYLE"
                )
            );
            this.initialize();
        }
    }
}
