


/**
 * [ViewElement description]
 * @type 
 */
class ColGroup extends HtmlElement
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
                    "COLGROUP"
                )
            );
            this.initialize();
        }
    }
}