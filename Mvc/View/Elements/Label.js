


/**
 * [ViewElement description]
 * @type 
 */
class Label extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "LABEL"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}