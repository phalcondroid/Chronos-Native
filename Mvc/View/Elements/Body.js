


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Body extends HtmlElement
{
    constructor(args : any = {})
    {
        super();
        this.setElement(document.body);
        this.setDi(new Service);
        this.initialize(args);
    }
}