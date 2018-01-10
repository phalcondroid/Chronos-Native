/**
 * [ViewElement description]
 * @type 
 */
class Obj extends HtmlElement
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
                    "OBJECT"
                )
            );
            this.initialize();
        }
    }
}