


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Figure extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
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