


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Code extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "CODE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
