


/**
 * [ViewElement description]
 * @type 
 */
class Datalist extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "DATALIST"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}