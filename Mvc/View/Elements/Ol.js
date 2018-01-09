


/**
 * [ViewElement description]
 * @type 
 */
class Ol extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "OL"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}