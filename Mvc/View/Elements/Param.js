


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Param extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "PARAM"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}