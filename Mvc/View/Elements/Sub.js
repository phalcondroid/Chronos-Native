/**
 * [ViewElement description]
 * @type {[type]}
 */
class Sub extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "SUB"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}