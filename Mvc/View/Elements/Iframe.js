


/**
 * [ViewElement description]
 * @type 
 */
class Iframe extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "IFRAME"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
