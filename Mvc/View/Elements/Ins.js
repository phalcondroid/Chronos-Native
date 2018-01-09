


/**
 * [ViewElement description]
 * @type 
 */
class Ins extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "INS"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
