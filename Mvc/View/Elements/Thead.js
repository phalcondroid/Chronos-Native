/**
 * [ViewElement description]
 * @type {[type]}
 */
class Thead extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "THEAD"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
