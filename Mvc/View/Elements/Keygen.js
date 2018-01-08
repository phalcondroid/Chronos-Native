


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Keygen extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "KEYGEN"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}