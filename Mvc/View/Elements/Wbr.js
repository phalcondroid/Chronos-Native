/**
 * [ViewElement description]
 * @type 
 */
class Wbr extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "SELECT"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
