


/**
 * [ViewElement description]
 * @type 
 */
class Noscrip extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "NOSCRIP"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
