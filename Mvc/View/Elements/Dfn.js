


/**
 * [ViewElement description]
 * @type 
 */
class Dfn extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "DFN"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}