


/**
 * [ViewElement description]
 * @type 
 */
class Ol extends HtmlElement
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
                    "OL"
                )
            );
            this.initialize();
        }
    }
}