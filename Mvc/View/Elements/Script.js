/**
 * [ViewElement description]
 * @type 
 */
class Script extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "SCRIPT"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}