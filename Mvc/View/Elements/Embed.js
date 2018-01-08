



/**
 * [ViewElement description]
 * @type {[type]}
 */
class Embed extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
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