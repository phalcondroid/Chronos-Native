/**
 * [ViewElement description]
 * @type 
 */
class Textarea extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "TEXTAREA"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}