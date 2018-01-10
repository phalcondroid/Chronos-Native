/**
 * [ViewElement description]
 * @type 
 */
class Section extends HtmlElement
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
                    "SECTION"
                )
            );
            this.initialize();
        }
    }
}