


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Output extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "OUTPUT"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}