/**
 * [ViewElement description]
 * @type 
 */
class Ul extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
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