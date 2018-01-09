


/**
 * [ViewElement description]
 * @type 
 */
class Leyend extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "LEYEND"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}