class Abbr extends HtmlElement
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
                    "ABBR"
                )
            );
            this.initialize();
        }
    }
}