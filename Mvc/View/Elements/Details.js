


/**
 * [ViewElement description]
 * @type 
 */
class Details extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "DETAILS"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}