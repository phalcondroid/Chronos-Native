


/**
 * [ViewElement description]
 * @type 
 */
class Menu extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "MENU"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}