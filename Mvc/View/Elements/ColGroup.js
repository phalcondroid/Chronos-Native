


/**
 * [ViewElement description]
 * @type {[type]}
 */
class ColGroup extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
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