/**
 * [ViewElement description]
 * @type 
 */
class Style extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
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
