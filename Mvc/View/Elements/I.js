


/**
 * [ViewElement description]
 * @type {[type]}
 */
class I extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "I"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}