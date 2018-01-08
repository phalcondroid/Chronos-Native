/**
 * [ViewElement description]
 * @type {[type]}
 */
class Video extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "VIDEO"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}