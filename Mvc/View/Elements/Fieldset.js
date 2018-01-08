



/**
 * [ViewElement description]
 * @type {[type]}
 */
class Fieldset extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "FIELDSET"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}