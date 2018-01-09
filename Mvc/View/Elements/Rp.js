/**
 * [ViewElement description]
 * @type 
 */
class Rp extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
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