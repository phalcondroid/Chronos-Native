/**
 * [ViewElement description]
 * @type 
 */
class Base extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "BASE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
     }
}