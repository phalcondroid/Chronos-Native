


/**
 * [ViewElement description]
 * @type 
 */
class Map extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "MAP"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}