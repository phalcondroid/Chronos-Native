


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Figcaption extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
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