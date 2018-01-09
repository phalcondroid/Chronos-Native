


/**
 * [ViewElement description]
 * @type 
 */
class Body extends HtmlElement
{
    constructor(args = {})
    {
        super();
        this.setElement(document.body);
        this.setDi(new Service);
        this.initialize(args);
    }
}