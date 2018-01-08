


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Caption extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "CAPTION"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}