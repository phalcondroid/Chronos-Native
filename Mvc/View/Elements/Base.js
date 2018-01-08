/**
 * [ViewElement description]
 * @type {[type]}
 */
class Base extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
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