


/**
 * [ViewElement description]
 * @type 
 */
class ColGroup extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "COLGROUP"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}