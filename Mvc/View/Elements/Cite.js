


/**
 * [ViewElement description]
 * @type 
 */
class Cite extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "CITE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}