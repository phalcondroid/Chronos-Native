


/**
 * [ViewElement description]
 * @type 
 */
class Div extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "DIV"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
