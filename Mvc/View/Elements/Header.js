


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Header extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "HEADER"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}