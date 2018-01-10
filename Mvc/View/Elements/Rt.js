/**
 * [ViewElement description]
 * @type 
 */
class Rt extends HtmlElement
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
                    "RT"
                )
            );
            this.initialize();
        }
    }
}