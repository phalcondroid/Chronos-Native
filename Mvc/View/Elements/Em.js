


/**
 * [ViewElement description]
 * @type 
 */
class Em extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "EM"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}