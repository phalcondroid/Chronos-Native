/**
 * [ViewElement description]
 * @type 
 */
class Video extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "VIDEO"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}