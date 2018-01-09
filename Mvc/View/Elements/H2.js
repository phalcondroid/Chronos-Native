


/**
 * [ViewElement description]
 * @type 
 */
class H2 extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "H2"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}