 /**
 * [ViewElement description]
 * @type 
 */
class U extends HtmlElement
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
                    "U"
                )
            );
            this.initialize();
        }
    }
}
