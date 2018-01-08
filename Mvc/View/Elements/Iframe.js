


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Iframe extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
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
