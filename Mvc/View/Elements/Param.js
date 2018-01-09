


/**
 * [ViewElement description]
 * @type 
 */
class Param extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "PARAM"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}