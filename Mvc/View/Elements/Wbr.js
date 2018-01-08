/**
 * [ViewElement description]
 * @type {[type]}
 */
class Wbr extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "SELECT"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
