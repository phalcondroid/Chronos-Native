/**
 * [ViewElement description]
 * @type 
 */
class Title extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
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