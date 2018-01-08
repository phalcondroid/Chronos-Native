 /**
 * [ViewElement description]
 * @type {[type]}
 */
class U extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "U"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
