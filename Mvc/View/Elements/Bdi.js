/**
 * [ViewElement description]
 * @type 
 */
class Bdi extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "BDI"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}