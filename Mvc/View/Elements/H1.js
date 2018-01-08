 


/**
 * [ViewElement description]
 * @type {[type]}
 */
class H1 extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "H1"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
