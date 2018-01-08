


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Map extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
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