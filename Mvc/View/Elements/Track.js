 /**
 * [ViewElement description]
 * @type 
 */
class Track extends HtmlElement
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
                    "TRACK"
                )
            );
            this.initialize();
        }
    }
}