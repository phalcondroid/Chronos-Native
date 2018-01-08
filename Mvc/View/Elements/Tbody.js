/**
 * [ViewElement description]
 * @type {[type]}
 */
class Tbody extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "TBODY"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
