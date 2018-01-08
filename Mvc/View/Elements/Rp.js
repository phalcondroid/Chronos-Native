/**
 * [ViewElement description]
 * @type {[type]}
 */
class Rp extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "RP"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}