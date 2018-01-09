 

/**
 * [ViewElement description]
 * @type 
 */
class Col extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "COL"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}