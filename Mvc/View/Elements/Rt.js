/**
 * [ViewElement description]
 * @type {[type]}
 */
class Rt extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "RT"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}