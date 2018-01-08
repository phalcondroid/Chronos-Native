/**
 * [ViewElement description]
 * @type {[type]}
 */
class Section extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "SECTION"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}