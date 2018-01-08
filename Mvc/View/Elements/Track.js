 /**
 * [ViewElement description]
 * @type {[type]}
 */
class Track extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "TRACK"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}