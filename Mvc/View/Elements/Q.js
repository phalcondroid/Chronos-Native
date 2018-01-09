/**
 * [ViewElement description]
 * @type 
 */
class Q extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
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