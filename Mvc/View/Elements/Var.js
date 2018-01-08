/**
 * [ViewElement description]
 * @type {[type]}
 */
class Var extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "VAR"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
