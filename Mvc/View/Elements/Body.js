


/**
 * [ViewElement description]
 * @type 
 */
class Body extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.body
            );
            this.initialize();
        }
    }
}