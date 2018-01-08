class Area extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
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