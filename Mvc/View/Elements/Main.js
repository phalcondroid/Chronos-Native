


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Main extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "MAIN"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}