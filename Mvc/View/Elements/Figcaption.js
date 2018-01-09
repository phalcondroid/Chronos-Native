


/**
 * [ViewElement description]
 * @type 
 */
class Figcaption extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "FIGCAPTION"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}