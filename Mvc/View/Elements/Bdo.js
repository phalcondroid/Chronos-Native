

/**
 * [ViewElement description]
 * @type {[type]}
 */
class Bdo extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "BDO"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}