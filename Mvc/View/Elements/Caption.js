


/**
 * [ViewElement description]
 * @type 
 */
class Caption extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "CAPTION"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}