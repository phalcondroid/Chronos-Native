/**
 * [ViewElement description]
 * @type 
 */
class I extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "I"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}