


/**
 * [ViewElement description]
 * @type {[type]}
 */
class H2 extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "H2"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}