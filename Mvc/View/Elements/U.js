 /**
 * [ViewElement description]
 * @type 
 */
class U extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
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
