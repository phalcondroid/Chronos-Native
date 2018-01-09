


/**
 * [ViewElement description]
 * @type 
 */
class H4 extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "H4"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}