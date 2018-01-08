/**
 * [ViewElement description]
 * @type {[type]}
 */
class Progress extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "PROGRESS"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
