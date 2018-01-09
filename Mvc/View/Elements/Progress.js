/**
 * [ViewElement description]
 * @type 
 */
class Progress extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "PROGRESS"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
