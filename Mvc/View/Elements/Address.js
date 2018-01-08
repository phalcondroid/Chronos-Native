class Address extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
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