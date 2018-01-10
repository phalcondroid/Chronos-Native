


/**
 * [ViewElement description]
 * @type 
 */
class Main extends HtmlElement
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
                    "MAIN"
                )
            );
            this.initialize();
        }
    }
}