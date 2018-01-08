


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Meter extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "METER"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
