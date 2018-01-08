


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Dl extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "DL"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
