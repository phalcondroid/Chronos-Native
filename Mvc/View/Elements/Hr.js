/**
 * [ViewElement description]
 * @type 
 */
class Hr extends HtmlElement
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
                    "HR"
                )
            );
            this.initialize();
        }
    }
}