/**
 * [ViewElement description]
 * @type {[type]}
 */
class Ul extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "UL"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}