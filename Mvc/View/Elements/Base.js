/**
 * [ViewElement description]
 * @type 
 */
class Base extends HtmlElement
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
                    "BASE"
                )
            );
            this.initialize();
        }
     }
}