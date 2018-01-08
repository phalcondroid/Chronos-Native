
/**
 * [ViewElement description]
 * @type {[type]}
 */
class Samp extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "SAMP"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}