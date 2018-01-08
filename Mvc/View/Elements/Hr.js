


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Hr extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "HR"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}