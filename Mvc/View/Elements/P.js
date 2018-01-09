


/**
 * [ViewElement description]
 * @type 
 */
class P extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "P"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}