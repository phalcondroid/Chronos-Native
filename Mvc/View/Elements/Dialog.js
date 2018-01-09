


/**
 * [ViewElement description]
 * @type 
 */
class Dialog extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "DIALOG"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
