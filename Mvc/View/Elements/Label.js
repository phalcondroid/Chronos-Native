


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Label extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "LABEL"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}