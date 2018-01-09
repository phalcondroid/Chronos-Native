/**
 * [ViewElement description]
 * @type 
 */
class Tr extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "TR"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
