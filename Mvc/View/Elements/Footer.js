


/**
 * [ViewElement description]
 * @type 
 */
class Footer extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "FOOTER"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}