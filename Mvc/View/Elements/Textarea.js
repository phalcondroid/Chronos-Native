/**
 * [ViewElement description]
 * @type {[type]}
 */
class Textarea extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
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