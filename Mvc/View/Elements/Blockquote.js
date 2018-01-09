


/**
 * [ViewElement description]
 * @type 
 */
class Blockquote extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "BLOCKQUOTE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
