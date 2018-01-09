/**
 * [ViewElement description]
 * @type 
 */
class Rt extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
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