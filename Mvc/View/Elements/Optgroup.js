


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Optgroup extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "OPTGROUP"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
