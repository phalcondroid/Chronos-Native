


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Dialog extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "DIALOG"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
