/**
 * [ViewElement description]
 * @type 
 */
class Tbody extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "TBODY"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
