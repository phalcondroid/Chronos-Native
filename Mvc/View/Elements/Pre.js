/**
 * [ViewElement description]
 * @type 
 */
class Pre extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "PRE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}