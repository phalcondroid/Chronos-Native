


/**
 * [ViewElement description]
 * @type {[type]}
 */
class H4 extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "H4"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}