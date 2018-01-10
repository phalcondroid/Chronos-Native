 


/**
 * [ViewElement description]
 * @type 
 */
class Br extends HtmlElement
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
                    "BR"
                )
            );
            this.initialize();
        }
    }
}