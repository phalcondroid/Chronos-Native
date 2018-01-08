


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Db extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "DB"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}