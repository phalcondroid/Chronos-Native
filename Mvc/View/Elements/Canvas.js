


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Canvas extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
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
