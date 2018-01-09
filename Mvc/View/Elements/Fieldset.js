



/**
 * [ViewElement description]
 * @type 
 */
class Fieldset extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
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