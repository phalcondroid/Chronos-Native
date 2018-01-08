 

/**
 * [ViewElement description]
 * @type {[type]}
 */
class Col extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "COL"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}