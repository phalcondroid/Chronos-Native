


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Noscrip extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
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
