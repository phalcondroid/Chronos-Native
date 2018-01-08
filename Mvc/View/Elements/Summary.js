/**
 * [ViewElement description]
 * @type {[type]}
 */
class Summary extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "SUMMARY"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}