


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Meta extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "META"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
