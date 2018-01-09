/**
 * [ViewElement description]
 * @type 
 */
class Sup extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
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
