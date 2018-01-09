/**
 * [ViewElement description]
 * @type 
 */
class Article extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
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
