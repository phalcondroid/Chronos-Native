


/**
 * [ViewElement description]
 * @type 
 */
class Keygen extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "KEYGEN"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}