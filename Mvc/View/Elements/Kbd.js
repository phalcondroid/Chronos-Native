


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Kbd extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "KBD"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}