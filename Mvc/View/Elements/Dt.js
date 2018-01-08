


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Dt extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "DT"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}