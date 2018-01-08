


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Details extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
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