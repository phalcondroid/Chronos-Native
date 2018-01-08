


/**
 * [ViewElement description]
 * @type {[type]}
 */
class H5 extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "H5"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
