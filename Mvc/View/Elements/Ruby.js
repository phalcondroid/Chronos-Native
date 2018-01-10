/**
 * [ViewElement description]
 * @type 
 */
class Ruby extends HtmlElement
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
                    "RUBY"
                )
            );
            this.initialize();
        }
    }
}