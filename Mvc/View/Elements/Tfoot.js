/**
 * [ViewElement description]
 * @type 
 */
class Tfoot extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
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