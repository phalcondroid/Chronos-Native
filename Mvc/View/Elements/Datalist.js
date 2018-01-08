


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Datalist extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
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