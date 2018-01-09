


/**
 * [ViewElement description]
 * @type 
 */
class Code extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "CODE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
