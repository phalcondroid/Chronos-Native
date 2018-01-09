class Address extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "ADDRESS"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}