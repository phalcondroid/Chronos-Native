/**
 * [ViewElement description]
 * @type 
 */
class Head extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "HEAD"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}