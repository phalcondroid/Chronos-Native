


/**
 * [ViewElement description]
 * @type 
 */
class H5 extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "H5"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
