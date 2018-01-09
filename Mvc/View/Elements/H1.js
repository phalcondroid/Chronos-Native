 


/**
 * [ViewElement description]
 * @type 
 */
class H1 extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "H1"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
