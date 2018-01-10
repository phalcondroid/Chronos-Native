


/**
 * [ViewElement description]
 * @type 
 */
class Db extends HtmlElement
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
                    "DB"
                )
            );
            this.initialize();
        }
    }
}