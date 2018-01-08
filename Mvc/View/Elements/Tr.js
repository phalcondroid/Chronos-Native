/**
 * [ViewElement description]
 * @type {[type]}
 */
class Tr extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "TR"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
