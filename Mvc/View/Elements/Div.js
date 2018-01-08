


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Div extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "DIV"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
