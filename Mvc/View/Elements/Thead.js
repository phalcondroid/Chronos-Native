/**
 * [ViewElement description]
 * @type 
 */
class Thead extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "THEAD"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
