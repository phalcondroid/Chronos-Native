/**
 * [ViewElement description]
 * @type 
 */
class Time extends HtmlElement
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
                    "TIME"
                )
            );
            this.initialize();
        }
    }
}