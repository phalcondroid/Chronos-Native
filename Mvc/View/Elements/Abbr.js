class Abbr extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
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