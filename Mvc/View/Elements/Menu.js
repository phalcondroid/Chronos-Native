


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Menu extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
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