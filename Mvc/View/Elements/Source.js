/**
 * [ViewElement description]
 * @type {[type]}
 */
class Source extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "SOURCE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}