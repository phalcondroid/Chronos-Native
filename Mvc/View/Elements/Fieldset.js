



/**
 * [ViewElement description]
 * @type 
 */
class Fieldset extends HtmlElement
{
    /**
     *
     */
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "FIELDSET"
                )
            );
            this.initialize();
        }
    }
}