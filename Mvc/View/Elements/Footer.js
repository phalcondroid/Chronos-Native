


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Footer extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
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