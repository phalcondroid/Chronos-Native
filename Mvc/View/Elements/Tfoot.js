/**
 * [ViewElement description]
 * @type {[type]}
 */
class Tfoot extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "TFOOT"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}