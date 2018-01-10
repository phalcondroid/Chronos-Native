


/**
 * [ViewElement description]
 * @type 
 */
class Datalist extends HtmlElement
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
                    "DATALIST"
                )
            );
            this.initialize();
        }
    }
}