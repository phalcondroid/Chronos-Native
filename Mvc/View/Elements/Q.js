/**
 * [ViewElement description]
 * @type {[type]}
 */
class Q extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "Q"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}