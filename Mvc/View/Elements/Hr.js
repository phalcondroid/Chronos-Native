/**
 * [ViewElement description]
 * @type 
 */
class Hr extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "HR"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}