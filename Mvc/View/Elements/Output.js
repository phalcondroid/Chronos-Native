


/**
 * [ViewElement description]
 * @type 
 */
class Output extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "OUTPUT"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}