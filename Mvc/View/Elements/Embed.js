



/**
 * [ViewElement description]
 * @type 
 */
class Embed extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "EMBED"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}