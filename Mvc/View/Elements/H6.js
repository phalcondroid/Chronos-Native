


/**
 * [ViewElement description]
 * @type {[type]}
 */
class H6 extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "BR"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
