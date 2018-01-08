/**
 * [ViewElement description]
 * @type {[type]}
 */
class Title extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "TITLE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}