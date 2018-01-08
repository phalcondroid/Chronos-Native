/**
 * [ViewElement description]
 * @type {[type]}
 */
class Script extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "SCRIPT"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}