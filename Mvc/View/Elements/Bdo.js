

/**
 * [ViewElement description]
 * @type 
 */
class Bdo extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
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