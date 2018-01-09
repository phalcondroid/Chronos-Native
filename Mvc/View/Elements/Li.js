


/**
 * [ViewElement description]
 * @type 
 */
class Li extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "LI"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}