


/**
 * [ViewElement description]
 * @type {[type]}
 */
class H3 extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "H3"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}