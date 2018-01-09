


/**
 * [ViewElement description]
 * @type 
 */
class Link extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "LINK"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
