


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Li extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "LI"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}