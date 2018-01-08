/**
 * [ViewElement description]
 * @type {[type]}
 */
class Span extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "SPAN"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}