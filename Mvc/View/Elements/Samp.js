
/**
 * [ViewElement description]
 * @type 
 */
class Samp extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
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