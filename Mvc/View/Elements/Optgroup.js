


/**
 * [ViewElement description]
 * @type 
 */
class Optgroup extends HtmlElement
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
                    "OPTGROUP"
                )
            );
            this.initialize();
        }
    }
}
