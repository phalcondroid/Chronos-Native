/**
 * [ViewElement description]
 * @type {[type]}
 */
class Strong extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "STRONG"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}