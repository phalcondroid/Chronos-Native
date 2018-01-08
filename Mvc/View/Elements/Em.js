


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Em extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "EM"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}