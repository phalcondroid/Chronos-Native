class Area extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "AREA"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}