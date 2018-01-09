/**
 * [ViewElement description]
 * @type 
 */
class Summary extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
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