/**
 * [ViewElement description]
 * @type {[type]}
 */
class Sup extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "SUP"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
