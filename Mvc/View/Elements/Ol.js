


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Ol extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "OL"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}