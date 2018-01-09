


/**
 * [ViewElement description]
 * @type 
 */
class Nav extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
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
