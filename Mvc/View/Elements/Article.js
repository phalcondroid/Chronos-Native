/**
 * [ViewElement description]
 * @type {[type]}
 */
class Article extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "ARTICLE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
