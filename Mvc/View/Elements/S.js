/**
 * [ViewElement description]
 * @type {[type]}
 */
class S extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "BR"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
