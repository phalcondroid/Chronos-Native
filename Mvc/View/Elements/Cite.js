


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Cite extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "CITE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}