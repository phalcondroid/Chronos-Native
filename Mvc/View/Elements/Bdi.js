/**
 * [ViewElement description]
 * @type {[type]}
 */
class Bdi extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
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