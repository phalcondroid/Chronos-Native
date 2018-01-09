


/**
 * [ViewElement description]
 * @type 
 */
class Menuitem extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
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