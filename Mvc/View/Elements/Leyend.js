


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Leyend extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "LEYEND"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}