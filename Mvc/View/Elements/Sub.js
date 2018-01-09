/**
 * [ViewElement description]
 * @type 
 */
class Sub extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "SUB"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}