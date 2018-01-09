


/**
 * [ViewElement description]
 * @type 
 */
class Kbd extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "KBD"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}