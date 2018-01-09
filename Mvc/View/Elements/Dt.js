


/**
 * [ViewElement description]
 * @type 
 */
class Dt extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "DT"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}