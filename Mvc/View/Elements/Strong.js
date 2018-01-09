/**
 * [ViewElement description]
 * @type 
 */
class Strong extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "STRONG"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}