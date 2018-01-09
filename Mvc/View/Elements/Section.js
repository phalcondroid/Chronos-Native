/**
 * [ViewElement description]
 * @type 
 */
class Section extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
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