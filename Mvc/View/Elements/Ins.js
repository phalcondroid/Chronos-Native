


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Ins extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "INS"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
