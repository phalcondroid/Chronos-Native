/**
 * [ViewElement description]
 * @type {[type]}
 */
class Pre extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "PRE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}