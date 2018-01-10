/**
 * [ViewElement description]
 * @type 
 */
class Article extends HtmlElement
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
                    "ARTICLE"
                )
            );
            this.initialize();
        }
    }
}
