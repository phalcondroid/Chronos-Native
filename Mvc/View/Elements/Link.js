


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Link extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
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
