 /**
 * [ViewElement description]
 * @type 
 */
class Track extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
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