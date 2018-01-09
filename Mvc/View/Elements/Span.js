/**
 * [ViewElement description]
 * @type 
 */
class Span extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
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