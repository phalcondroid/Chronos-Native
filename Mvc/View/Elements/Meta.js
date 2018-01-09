


/**
 * [ViewElement description]
 * @type 
 */
class Meta extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "META"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
