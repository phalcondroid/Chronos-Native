/**
 * [ViewElement description]
 * @type 
 */
class Small extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "small"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
