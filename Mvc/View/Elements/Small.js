/**
 * [ViewElement description]
 * @type {[type]}
 */
class Small extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "small"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
