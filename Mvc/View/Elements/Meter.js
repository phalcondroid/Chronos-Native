


/**
 * [ViewElement description]
 * @type 
 */
class Meter extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
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
