


/**
 * [ViewElement description]
 * @type 
 */
class Canvas extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "CANVAS"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
