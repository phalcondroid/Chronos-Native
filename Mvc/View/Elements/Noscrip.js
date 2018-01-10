


/**
 * [ViewElement description]
 * @type 
 */
class Noscrip extends HtmlElement
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
                    "NOSCRIP"
                )
            );
            this.initialize();
        }
    }
}
