


/**
 * [ViewElement description]
 * @type 
 */
class Meta extends HtmlElement
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
                    "META"
                )
            );
            this.initialize();
        }
    }
}
