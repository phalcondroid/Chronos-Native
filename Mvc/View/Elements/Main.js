


/**
 * [ViewElement description]
 * @type 
 */
class Main extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
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