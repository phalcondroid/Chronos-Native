


/**
 * [ViewElement description]
 * @type 
 */
class Optgroup extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
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
