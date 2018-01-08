


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Dfn extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "DFN"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}