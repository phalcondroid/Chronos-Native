


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Head extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "HEAD"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}