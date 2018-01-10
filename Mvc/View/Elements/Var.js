/**
 * [ViewElement description]
 * @type 
 */
class Var extends HtmlElement
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
                    "VAR"
                )
            );
            this.initialize();
        }
    }
}
