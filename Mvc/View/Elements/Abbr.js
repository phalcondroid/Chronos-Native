class Abbr extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "ABBR"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}