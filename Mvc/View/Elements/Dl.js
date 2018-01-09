


/**
 * [ViewElement description]
 * @type 
 */
class Dl extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "DL"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
