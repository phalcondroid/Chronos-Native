/**
 * [ViewElement description]
 * @type 
 */
class Summary extends HtmlElement
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
                    "SUMMARY"
                )
            );
            this.initialize();
        }
    }
}