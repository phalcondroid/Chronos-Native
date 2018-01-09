


/**
 * [ViewElement description]
 * @type 
 */
class Figure extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "FIGURE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}