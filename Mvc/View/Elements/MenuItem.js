


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Menuitem extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "MENUITEM"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}