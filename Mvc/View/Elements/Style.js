/**
 * [ViewElement description]
 * @type {[type]}
 */
class Style extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "STYLE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
