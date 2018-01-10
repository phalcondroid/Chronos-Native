/**
 * [ViewElement description]
 * @type 
 */
class Sub extends HtmlElement
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
                    "SPAN"
                )
            );
            this.initialize();
        }
    }
}