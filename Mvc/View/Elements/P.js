


/**
 * [ViewElement description]
 * @type {[type]}
 */
class P extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "P"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}