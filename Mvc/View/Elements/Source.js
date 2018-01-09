/**
 * [ViewElement description]
 * @type 
 */
class Source extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "SOURCE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}