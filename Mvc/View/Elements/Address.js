class Address extends HtmlElement
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
                    "ADDRESS"
                )
            );
            this.initialize();
        }
    }
}