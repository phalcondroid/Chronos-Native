


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Nav extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "NAV"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
