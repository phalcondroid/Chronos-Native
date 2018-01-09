/**
 * [ViewElement description]
 * @type 
 */
class Header extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
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